import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    const result = [];
    const students_data = await readDatabase(process.execArgv[0]);
    students_data.then((data) => {
      response.write('This is the list of our students');
      response.statusCode = 200;

      for (let field of Object.keys(data)) {
        log = `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
        result.push(log);
      }
      response.end(result.join('\n'));
    })
    .catch((err) => {
      response.statusCode = 500;
      response.statusMessage('Cannot load the database');
    });
  }

  static async getAllStudentsByMajor(request, response) {
    const result = [];
    const major = request.params.major;

    const students_data = await readDatabase(process.execArgv[0]);
    students_data.then((data) => {
      if (major in data) {
        response.statusCode = 200;
        log = `List: ${data[major].join(', ')}`;
        response.end(result.join('\n'));
      }
      else {
        response.statusCode = 500;
        response.statusMessage = 'Major parameter must be CS or SWE';
      }
    })
    .catch((err) => {
      response.statusCode = 500;
      response.statusMessage('Cannot load the database');
    });
}}

module.exports = StudentsController;
