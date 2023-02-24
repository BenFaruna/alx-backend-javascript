const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('Testing async function to ensure correct data returned', () => {
  it('test function call with argument as false', (done) => {
    expect(getPaymentTokenFromAPI(false)).to.be.undefined;
    done();
  });
  it('test function call with argument as true', (done) => {
    const value = getPaymentTokenFromAPI(true)
    expect(value).to.be.instanceof(Promise);
    done();
  });
})