const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');

describe('Checks to ensure calculateNUmber is used in sendPaymentRequestToApi', () => {
  it('Checks arguments used to call calculateNumber', () => {
    sinon.spy(console, 'log');
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.args[0]).to.deep.equal(['SUM', 100, 20]);
    expect(calculateNumberStub.args[0][0]).to.be.equal('SUM');
    expect(calculateNumberStub.args[0][1]).to.be.equal(100);
    expect(calculateNumberStub.args[0][2]).to.be.equal(20);
  });
  it('Checks to ensure the function call prints the right total', () => {
    expect(console.log.calledWith('The total is: 10'));
    sinon.restore();
  })
});
