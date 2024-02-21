"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
class Human {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    getInfo() {
        return `FirstName= ${this._firstName}, LastName = ${this._lastName}`;
    }
}
exports.Human = Human;
