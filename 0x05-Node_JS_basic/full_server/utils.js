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
  return students;//[count, students];
}

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    // const result = [];

    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error(err.message));
        return;
      }
      // let log;
      let database = data.toString();
      database = database.split('\n').slice(1);
      // const [count, table] = extractStudentDetails(database);
      const table = extractStudentDetails(database);

      // log = `Number of students: ${count}`;
      // result.push(log);

      // for (const field of Object.keys(table)) {
      //   log = `Number of students in ${field}: ${table[field].length}. List: ${table[field].join(', ')}`;
      //   result.push(log);
      // }
      resolve(table);
    });
  });
}

// async function run() {
//   let data = await readDatabase('../database.csv').then(async (data) => {
//     return await data
//   });
  
//   console.log(data);
// }

// run()