/// <reference path='Teacher.ts' />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number
  }
}

namespace Subjects {
  export class Java extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }
  
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
