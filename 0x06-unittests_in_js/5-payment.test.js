const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('using hooks to execute code before and after tests', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Confirms console output with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 120'));
  });

  it('Confirms console output with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledWith('The total is: 20'));
  })
});