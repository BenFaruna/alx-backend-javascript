function calculateNumber (a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw TypeError;
  }

  a = Math.round(a);
  b = Math.round(b);
  return a + b;
}

module.exports = calculateNumber;
