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

describe('Login endpoint', () => {
  it('Correct status code on get request', (done) => {
    request.get('http://localhost:7865/login', (error, head, data) => {
      expect(head.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Correct status code on post request', (done) => {
    request.post('http://localhost:7865/login', (error, head, data) => {
      expect(head.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct content-type of response', (done) => {
    request.post('http://localhost:7865/login', (error, head, data) => {
      expect(head.headers['content-type']).to.deep.equal('text/html; charset=utf-8');
      done();
    });
  });

  it('Check response data on login with data', (done) => {
    request.post('http://localhost:7865/login', { body: { userName: 'Betty' }, json: true }, (error, head, data) => {
      expect(data).to.deep.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('Correct status code in response', (done) => {
    request.get('http://localhost:7865/available_payments', (error, head, data) => {
      expect(head.statusCode).to.be.equal(200);
      done();
    });
  });

  it('Correct data in response', (done) => {
    request.get('http://localhost:7865/available_payments', (error, head, data) => {
      expected_data = JSON.stringify({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });

      expect(data).to.deep.equal(expected_data);
      done();
    });
  });

  it('Correct content-type of response', (done) => {
    request.get('http://localhost:7865/available_payments', (error, head, data) => {
      expect(head.headers['content-type']).to.deep.equal('application/json; charset=utf-8');
      done();
    });
  });
});
