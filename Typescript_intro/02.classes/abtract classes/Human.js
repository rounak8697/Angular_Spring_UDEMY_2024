"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
var Human = /** @class */ (function () {
    function Human(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Human.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Human.prototype.getInfo = function () {
        return "FirstName= ".concat(this._firstName, ", LastName = ").concat(this._lastName);
    };
    return Human;
}());
exports.Human = Human;
