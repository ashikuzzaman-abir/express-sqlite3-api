#include<stdio.h>


struct  Student{
    char name[20];
    int age;
    int marks[3];
};

int main () {
    int size, i;

    printf("Enter number of students: ");
    scanf("%d", &size);

    struct Student students[size];

    for(i=0; i<size; i++){
        
        printf("Student ")
    }

    return 0;
}