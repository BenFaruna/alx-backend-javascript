const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');

describe('Checks to ensure calculateNUmber is used in sendPaymentRequestToApi', () => {
  it('Checks calculateNumber is called once', () => {
    sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });
  it('Checks the arguments used to call the method', () => {
    expect(Utils.calculateNumber.firstCall.args[1]).to.be.equal(100);
    expect(Utils.calculateNumber.firstCall.args[2]).to.be.equal(20);
    sinon.restore();
  });
});
