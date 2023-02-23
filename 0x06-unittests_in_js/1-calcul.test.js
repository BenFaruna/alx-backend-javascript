const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('type equals SUM', () => {
    it('checks equality', () => {
      assert.equal(4, calculateNumber('SUM', 1, 3));
    });
    it('checks equality', () => {
      assert.equal(5, calculateNumber('SUM', 1, 3.7));
    });
    it('checks equality', () => {
      assert.equal(5, calculateNumber('SUM', 1.2, 3.7));
    });
    it('checks equality', () => {
      assert.equal(6, calculateNumber('SUM', 1.5, 3.7));
    });
  });
  describe('type equals SUBTRACT', () => {
    it('checks equality', () => {
      assert.equal(-2, calculateNumber('SUBTRACT', 1, 3));
    });
    it('checks equality', () => {
      assert.equal(0, calculateNumber('SUBTRACT', 3.7, 3.5));
    });
    it('checks equality', () => {
      assert.equal(4, calculateNumber('SUBTRACT', 5, 1.4));
    });
    it('checks equality', () => {
      assert.equal(-4, calculateNumber('SUBTRACT', 0, 3.7));
    });
  });
  describe('type equals DIVIDE', () => {
    it('checks equality', () => {
      assert.equal('Error', calculateNumber('DIVIDE', 1.4, 0));
    });
    it('checks equality', () => {
      assert.equal(0.2, calculateNumber('DIVIDE', 1.4, 4.5));
    });
    it('checks equality', () => {
      assert.equal(2.0, calculateNumber('DIVIDE', 4, 2));
    });
    it('checks equality', () => {
      assert.equal(0, calculateNumber('DIVIDE', 0, 3.7));
    });
  });
});
