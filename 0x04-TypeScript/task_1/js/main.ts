interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string;
  [key: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};


function printTeacher(firstName: string, lastName:string): string {
  return `${firstName[0]}. ${lastName}`
}

export interface printTeacherFunction {
  printTeacher(arg0: string, arg1: string): string
}

export interface StudentClassInterface {
  firstName: string,
  lastName: string,
  workOnHomework(): string,
  displayName(): string,
}

export class StudentClass implements StudentClassInterface{
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

console.log(teacher3);
console.log(director1);
