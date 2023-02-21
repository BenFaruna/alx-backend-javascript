const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const hostname = '127.0.0.1';

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const path = process.execArgv.length > 0 ? process.execArgv[0] : 'database.csv';
    const student = await countStudents(path);
    res.write('This is the list of our students\n');
    res.end(student.join('\n'));
  }
});

app.listen(port, hostname);

module.exports = app;
