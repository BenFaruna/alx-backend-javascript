export interface EmployeeInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
}

export interface DirectorInterface extends EmployeeInterface {
  workDirectorTasks(): string
}

export interface TeacherInterface extends EmployeeInterface {
  workTeacherTasks(): string
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  salary = typeof salary === 'number' ? salary : Number(salary.slice(1));
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

export function isDirector(employee:DirectorInterface | TeacherInterface): boolean {
  if (employee instanceof Director) {
    return true;
  }
  return false;
}

export function executeWork(employee: any): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

export type Subject = 'Math' | 'History';

export function teachClass(todayClass: Subject): void {
    console.log('Teaching', todayClass);
}

console.log(String('Maths'));

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
teachClass('Math');
teachClass('History');
