#include <iostream>

using namespace std;

int main(int, char **)
{
    int arr[2][3][4] = {{{1, 2, 3, 4},
                         {11, 12, 13, 14},
                         {21, 22, 23, 24}},
                        {{101, 102, 103, 104},
                         {111, 112, 113, 114},
                         {121, 122, 123, 124}}};

    cout << "                           Size of 'int' = " << sizeof(int) << " bytes" << endl;
    cout << "                                     arr = " << arr << endl;
    cout << "                                    &arr = " << &arr << endl;
    cout << "                                    *arr = " << *arr << endl;
    cout << "                                  arr[0] = " << arr[0] << endl;
    cout << "                                 &arr[0] = " << &arr[0] << endl;
    cout << "                                 *arr[0] = " << *arr[0] << endl;
    cout << "                               arr[0][0] = " << arr[0][0] << endl;
    cout << "                               arr[0][1] = " << arr[0][1] << endl;
    cout << "                   arr[0][1] - arr[0][0] = " << arr[0][1] - arr[0][0] << endl;
    cout << "                            arr[0][0][0] = " << arr[0][0][0] << endl;

    void *arrptr = &arr;
    cout << "                                  arrptr = " << arrptr << endl;
    cout << "                                 &arrptr = " << &arrptr << endl;
    cout << "                        *((int *)arrptr) = " << *((int *)arrptr) << endl;
    cout << "                    *((int *)arrptr + 1) = " << *((int *)arrptr + 1) << endl;
    cout << "                   *((int *)arrptr + 13) = " << *((int *)arrptr + 13) << endl;
    cout << "         ((int(*)[3][4])arrptr)[1][0][1] = " << ((int(*)[3][4])arrptr)[1][0][1] << endl;

    void *arrptrv = (void *)&arr; // arrptr2 == arrptr
    cout << "                                 arrptrv = " << arrptrv << endl;
    cout << "                                &arrptrv = " << &arrptrv << endl;
    cout << "        ((int(*)[3][4])arrptrv)[1][0][1] = " << ((int(*)[3][4])arrptrv)[1][0][1] << endl;

    void **arrptrvv = (void **)&arr;
    cout << "                                arrptrvv = " << arrptrvv << endl;
    cout << "                               *arrptrvv = " << *arrptrvv << endl;
    cout << "                            arrptrvv + 1 = " << arrptrvv + 1 << endl;
    cout << "                         *(arrptrvv + 1) = " << *(arrptrvv + 1) << endl;
    cout << "       ((int(*)[3][4])arrptrvv)[1][0][1] = " << ((int(*)[3][4])arrptrvv)[1][0][1] << endl;
    cout << "            &(*((int(*)[4])arrptrvv))[0] = " << &(*((int(*)[4])arrptrvv))[0] << endl;
    cout << "         (*((int(*)[4])arrptrvv + 3))[1] = " << (*((int(*)[4])arrptrvv + 3))[1] << endl;

    void ***arrptrvvv = (void ***)&arr;
    cout << "                               arrptrvvv = " << arrptrvvv << endl;
    cout << "                              *arrptrvvv = " << *arrptrvvv << endl;
    cout << "                           arrptrvvv + 1 = " << arrptrvvv + 1 << endl;
    cout << "                        *(arrptrvvv + 1) = " << *(arrptrvvv + 1) << endl;
    cout << "               *((int(*))arrptrvvv + 13) = " << *((int(*))arrptrvvv + 13) << endl;

    void **arrptrvv1 = *(void ***)&arr;
    cout << "                               arrptrvv1 = " << arrptrvv1 << endl;
    cout << "                              &arrptrvv1 = " << &arrptrvv1 << endl;
    cout << "                          &arrptrvv1 + 3 = " << &arrptrvv1 + 3 << endl;
    cout << "                       *(&arrptrvv1 + 3) = " << *(&arrptrvv1 + 3) << endl;
    cout << " (*((int(*)[4])(&arrptrvv1 + 3) + 3))[1] = " << (*((int(*)[4])(&arrptrvv1 + 3) + 3))[1] << endl;
}
