interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 12,
  location: 'G-Gozil',
}

const student2: Student = {
  firstName: 'Jane',
  lastName: 'GI',
  age: 10,
  location: '2/1 Road safety',
}

const studentList: Student[] = [student1, student2];

function createTable(students: Student[]) {
  const element = document.createElement('div');
  let table: string = '<table>\
  <tr>\
    <td>First Name</td>\
    <td>Location</td>\
  </tr>';
  // console.log(table);
  for (const student of students) {
    table += `<tr><td>${student.firstName}</td><td>${student.location}</td></tr></table>`
  }
  element.innerHTML = table;
  return element;
}

document.body.appendChild(createTable(studentList));