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

describe('Cart page', () => {
  it('Correct status code in response without id', (done) => {
    request.get('http://localhost:7865/cart', (error, head, data) => {
      expect(head.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Correct status code in response with id that is not integer', (done) => {
    request.get('http://localhost:7865/cart/alx', (error, head, data) => {
      expect(head.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Correct status code in response with id', (done) => {
    request.get('http://localhost:7865/cart/1', (error, head, data) => {
      expect(head.statusCode).to.be.equal(200);
      done();
    });
  });

  it('Correct data in response', (done) => {
    request.get('http://localhost:7865/cart/1', (error, head, data) => {
      expect(data).to.deep.equal('Payment methods for cart 1');
      done();
    });
  });

  it('Correct content-type of response', (done) => {
    request.get('http://localhost:7865/cart/1', (error, head, data) => {
      expect(head.headers['content-type']).to.deep.equal('text/html; charset=utf-8');
      done();
    });
  });
});
