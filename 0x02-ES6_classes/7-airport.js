/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
