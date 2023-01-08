# 0x04. Typescript

## Tasks
0. Creating an interface for a student

Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
Create two students, and create an array named studentsList containing the two variables
Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
Each row should contain the first name of the student and the location
Requirements:

File: [task_0/js/main.ts](./task_0/js/main.ts)
  
1. Let's build a Teacher interface

`firstName`(string) and `lastName`(string). These two attributes should only be modifiable when a `Teacher` is first initialized
`fullTimeEmployee`(boolean) this attribute should always be defined
`yearsOfExperience`(number) this attribute is optional
`location`(string) this attribute should always be defined
Add the possibility to add any attribute to the Object like `contract`(boolean) without specifying the name of the attribute

File: [task_1/js/main.ts](./task_1/js/main.ts)
 
2. Extending the Teacher class

Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports`(number)

File: [task_1/js/main.ts](./task_1/js/main.ts)
 
3. Printing teachers

Write a function `printTeacher`:

It accepts two arguments `firstName` and `lastName`.
It returns the first letter of the firstName and the full lastName

Example:
```ts
printTeacher("John", "Doe") -> J. Doe
```
Write an interface for the function named `printTeacherFunction`.

File: [task_1/js/main.ts](./task_1/js/main.ts)
 
4. Writing a class

Write a Class named `StudentClass`:

The constructor accepts `firstName`(string) and `lastName`(string) arguments
The class has a method named `workOnHomework` that return the string "Currently working"
The class has a method named `displayName`. It returns the firstName of the student

File: [task_1/js/main.ts](./task_1/js/main.ts)
 
5. Advanced types Part 1

Create the `DirectorInterface` interface with the 3 expected methods:

`workFromHome()` returning a string
`getCoffeeBreak()` returning a string
`workDirectorTasks()` returning a string

Create the TeacherInterface interface with the 3 expected methods:

`workFromHome()` returning a string
`getCoffeeBreak()` returning a string
`workTeacherTasks()` returning a string

Create a class Director that will implement `DirectorInterface`

Create a function `createEmployee` with the following requirements:

It can return either a Director or a Teacher instance
It accepts 1 arguments:
salary(either number or string)
if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director

File: [task_2/js/main.ts](./task_2/js/main.ts)
 
6. Creating functions specific to employees

Write a function `isDirector`:

it accepts employee as an argument

Write a function `executeWork`:

it accepts employee as an argument
if the employee is a Director, it will call workDirectorTasks
if the employee is a Teacher, it will call workTeacherTasks

File: [task_2/js/main.ts](./task_2/js/main.ts)
 
7. String literal types

Write a String literal type named `Subjects` allowing a variable to have the value "Math" or "History" only.

Write a function named `teachClass`:

it takes todayClass as an argument
it will return the string "Teaching Math" if todayClass is Math
it will return the string "Teaching History" if todayClass is History

File: [task_2/js/main.ts](./task_2/js/main.ts)
  
8. Ambient Namespaces

The first part of will require that you build an interface and a type. Inside a file named interface.ts:

Create a type `RowID` and set it equal to number

Create an interface `RowElement` that contains these 3 fields:

`firstName`: string
`lastName`: string
`age?`: number


File: [task_3/js/main.ts](./task_3/js/main.ts), [task_3/js/interface.ts](./task_3/js/interface.ts), [task_3/js/crud.d.ts](./task_3/js/crud.d.ts)
 
9. Namespace & Declaration merging

In task_4/js/subjects:

Create a file Teacher.ts and write a `Teacher` interface in a namespace named `Subjects`.

Create a file Subject.ts and write a `Subject` class in the same namespace named `Subjects`.

the class has one attribute teacher that implements the `Teacher` interface.

the class has one setter method `setTeacher` that accepts a teacher in argument (and as setter, set the instance attribute teacher with it)

File: [task_4/js/subjects/Cpp.ts](./task_4/js/subjects/Cpp.ts), [task_4/js/subjects/Java.ts](./task_4/js/subjects/Java.ts), [task_4/js/subjects/React.ts](./task_4/js/subjects/React.ts), [task_4/js/subjects/Subject.ts](./task_4/js/subjects/Subject.ts), [task_4/js/subjects/Teacher.ts](./task_4/js/subjects/Teacher.ts)
 
10. Update task_4/js/main.ts

create and export a constant `cpp` for Cpp Subjects

create and export a constant `java` for Java Subjects

create and export a constant `react` for React Subjects

create and export one Teacher object `cTeacher` with `experienceTeachingC` = 10

File: [task_4/js/main.ts](./task_4/js/main.ts)
 
11. Brand convention & Nominal typing

Create two interfaces `MajorCredits` and `MinorCredits`

Each interface defines a number named credits
Add a brand property to each interface in order to uniquely identify each of them.

Create two functions named `sumMajorCredits` and `sumMinorCredits`.

Each function takes two arguments subject1 and subject2
`sumMajorCredits` returns `MajorCredits` value and `sumMinorCredits` returns `MinorCredits` value

Each function sums the credits of the two subjects

File: [task_5/js/main.ts](./task_5/js/main.ts)
