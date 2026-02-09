#include <stdio.h>

int main()
{
    int voti[9] = {88, 77, 66, 55, 44, 33, 22, 11, 0};

    for (int i = 0; i <= 9; i++)
    {
        printf("indice[%d] = %d\n", i, voti[i]);
    }
}