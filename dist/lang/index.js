"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __importDefault(require("./isArray"));
var isBoolean_1 = require("./isBoolean");
var isNil_1 = require("./isNil");
exports.default = {
    isArray: isArray_1.default,
    isBoolean: isBoolean_1.isBoolean,
    isNil: isNil_1.isNil
};
