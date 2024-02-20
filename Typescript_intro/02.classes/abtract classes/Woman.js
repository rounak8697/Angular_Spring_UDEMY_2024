"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Woman = void 0;
var Human_1 = require("./Human");
var Woman = /** @class */ (function (_super) {
    __extends(Woman, _super);
    function Woman(fName, lName, _gendar, _hasBeard) {
        var _this = _super.call(this, fName, lName) || this;
        _this._gendar = _gendar;
        _this._hasBeard = _hasBeard;
        return _this;
    }
    Object.defineProperty(Woman.prototype, "gendar", {
        get: function () {
            return this._gendar;
        },
        set: function (value) {
            this._gendar = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Woman.prototype, "hasBeard", {
        get: function () {
            return this._hasBeard;
        },
        set: function (value) {
            this._hasBeard = value;
        },
        enumerable: false,
        configurable: true
    });
    Woman.prototype.getInfo = function () {
        return (_super.prototype.getInfo.call(this) +
            " Information About a Man :  1. Gender :".concat(this._gendar, "  2. Features : ").concat(this._hasBeard));
    };
    Woman.prototype.describeFeature = function () {
        return " Women are the source of universe ";
    };
    return Woman;
}(Human_1.Human));
exports.Woman = Woman;
