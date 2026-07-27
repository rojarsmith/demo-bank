// windows git bash
// gcc -S return_7.c
// gcc -m64 return_7.s -o return_7.exe
// echo $?

int main()
{
    return 7;
}

// gcc -S -O3 -fno-asynchronous-unwind-tables return_7.c