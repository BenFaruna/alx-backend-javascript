const fs = require('fs');

function extractStudentDetails(studentList) {
  // const tableField = studentList[0];
  const students = [];

  for (let student of studentList.slice(1)) {
    if (student !== '') {
      student = student.trim();
      students.push(student.split(','));
    }
  }
  return students;
}

function countStudents(path) {
  let database;
  let csStudents = '';
  let csStudentsCount = 0;
  let sweStudents = '';
  let sweStudentsCount = 0;

  try {
    database = fs.readFileSync(path).toString();
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const table = extractStudentDetails(database.split('\n'));

  for (const student of table) {
    if (student[3] === 'CS') {
      csStudentsCount += 1;
      csStudents = csStudents !== '' ? `${csStudents}, ${student[0]}` : student[0];
    } else {
      sweStudentsCount += 1;
      sweStudents = sweStudents !== '' ? `${sweStudents}, ${student[0]}` : student[0];
    }
  }

  console.log('Number of students:', table.length);
  console.log(`Number of students in CS: ${csStudentsCount}. List: ${csStudents}`);
  console.log(`Number of students in SWE: ${sweStudentsCount}. List: ${sweStudents}`);
}

countStudents('database.csv');
