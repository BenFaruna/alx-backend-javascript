/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    for (const student of students) {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = students;
    // this.name = name;
    // this.length = length;
    // this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    for (const student of students) {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = students;
  }
}
