namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number
  }
}

namespace Subjects {
  export class React extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }
  
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
