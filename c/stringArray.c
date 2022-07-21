#include<stdio.h>



int main () {
    char names[11][20];

    for (int i = 0; i < 10; i++) {
        printf("Enter name %d: ", i + 1);
        scanf("%s", names[i]);
    }
    printf("names: \n");
    for (int i = 0; i < 10; i++) {
        printf("%d: %s \n", i + 1, names[i]);
        
    }

    



    return 0;
}