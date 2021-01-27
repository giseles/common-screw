"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isType = function (type) { return function (o) {
    return Object.prototype.toString.call(o) === "[object " + type + "]";
}; };
exports.default = isType;
