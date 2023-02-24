const calculateNumber = require('./1-calcul.js');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', () => {
  describe('type equals SUM', () => {
    it('checks equality', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });
  describe('type equals SUBTRACT', () => {
    it('checks equality', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 3.7, 3.5)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 5, 1.4)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 0, 3.7)).to.equal(-4);
    });
  });
  describe('type equals DIVIDE', () => {
    it('checks equality', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2.0);
      expect(calculateNumber('DIVIDE', 0, 3.7)).to.equal(0);
    });
  });
});
