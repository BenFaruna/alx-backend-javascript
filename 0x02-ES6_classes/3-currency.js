/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(sign) {
    if (typeof sign === 'string') {
      this._code = sign;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
