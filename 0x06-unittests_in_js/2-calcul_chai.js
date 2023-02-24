function calculateNumber (type, a, b) {
  
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw TypeError;
  }

  a = Math.round(a);
  b = Math.round(b);

  if (type === 'SUM') {
    return a + b;
  } else if (type === 'SUBTRACT') {
    return a - b;
  } else if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    }
    return a / b;
  } else {
    throw TypeError;
  }
}

module.exports = calculateNumber;
