// Support Windows.
#include <iostream>
#include <windows.h>

struct User
{
    int age;
};

class Engine // Example class.
{
public:
    virtual void VirtualFunction01(User *);
};

void Engine::VirtualFunction01(User *user)
{
    printf("VirtualFunction01 called, age=%d.\n\r", user->age);
}

typedef void(__thiscall *VirtualFunction01_t)(void *thisptr, User *user);
VirtualFunction01_t g_org_VirtualFunction01;

// Our detour function.
void hk_VirtualFunction01(void *thisptr, User *user)
{
    user->age = 18;
    printf("Custom function called, age=%d.\n\r", user->age);
    // Call the original function.
    user->age = 20;
    g_org_VirtualFunction01(thisptr, user);
}

int main(int, char **)
{
    User user;
    user.age = 10;
    Engine *engine = new Engine();
    engine->VirtualFunction01(&user);
    void **base = *(void ***)engine; // [(void***)engine] -> [Virtual Function Table Address]

    auto dbg1 = base;
    auto dbg2 = *base;
    void (Engine::*dbg3)(User *) = &Engine::VirtualFunction01;

    DWORD old_protection;
    VirtualProtect(&base[0], 4, PAGE_EXECUTE_READWRITE, &old_protection);
    // Save the original function.
    g_org_VirtualFunction01 = (VirtualFunction01_t)base[0];
    // Overwrite.
    base[0] = reinterpret_cast<void *>(&hk_VirtualFunction01);
    VirtualProtect(&base[0], 4, old_protection, 0);

    // Call the virtual function (now hooked) from our class instance.
    engine->VirtualFunction01(&user);
}
