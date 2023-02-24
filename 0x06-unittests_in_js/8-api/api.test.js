const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('Correct status code in response', (done) => {
    request.get('http://localhost:7865', (error, head, data) => {
      expect(head.statusCode).to.be.equal(200);
      done();
    });
  });

  it('Correct data in response', (done) => {
    request.get('http://localhost:7865', (error, head, data) => {
      expect(data).to.deep.equal('Welcome to the payment system');
      done();
    });
  });

  it('Correct content-type of response', (done) => {
    request.get('http://localhost:7865', (error, head, data) => {
      expect(head.headers['content-type']).to.deep.equal('text/html; charset=utf-8');
      done();
    });
  });
});
