class AppController {
  static getHompage(request, response) {
    response.statusCode = 200;
    response.end('Hello Holberton School!');
  }
}

AppController();

module.exports = AppController;
