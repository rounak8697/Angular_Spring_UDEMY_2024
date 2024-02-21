"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Man = void 0;
const Human_1 = require("./Human");
class Man extends Human_1.Human {
    constructor(fName, lName, _gendar, _hasBeard) {
        super(fName, lName);
        this._gendar = _gendar;
        this._hasBeard = _hasBeard;
    }
    get gendar() {
        return this._gendar;
    }
    set gendar(value) {
        this._gendar = value;
    }
    get hasBeard() {
        return this._hasBeard;
    }
    set hasBeard(value) {
        this._hasBeard = value;
    }
    getInfo() {
        return (super.getInfo() +
            ` Information About a Man :  1. Gender :${this._gendar}  2. Features : ${this._hasBeard}`);
    }
}
exports.Man = Man;
