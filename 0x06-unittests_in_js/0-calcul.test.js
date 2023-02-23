const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('checks equality', () => {
    assert.equal(4, calculateNumber(1, 3));
  });
  it('checks equality', () => {
    assert.equal(5, calculateNumber(1, 3.7));
  });
  it('checks equality', () => {
    assert.equal(5, calculateNumber(1.2, 3.7));
  });
  it('checks equality', () => {
    assert.equal(6, calculateNumber(1.5, 3.7));
  });
});
