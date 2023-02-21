const fs = require('fs');

function extractStudentDetails(studentList) {
  const students = {};
  let count = 0;

  for (let student of studentList) {
    if (student !== '') {
      student = student.trim();
      student = student.split(',');
      count += 1;

      try {
        students[student[student.length - 1]].push(student[0]);
      } catch (error) {
        students[student[student.length - 1]] = [student[0]];
      }
    }
  }
  return [count, students];
}

function countStudents(path) {
  let database;

  try {
    database = fs.readFileSync(path).toString();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  database = database.split('\n').slice(1);

  const [count, table] = extractStudentDetails(database);

  console.log('Number of students:', count);

  for (const field of Object.keys(table)) {
    console.log(`Number of students in ${field}: ${table[field].length}. List: ${table[field].join(', ')}`);
  }
}

module.exports = countStudents;
