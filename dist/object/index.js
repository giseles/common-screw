"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnJson = void 0;
function isNullOrUnfined(value) {
    if (value === '' || value === undefined || value === null) {
        return true;
    }
    else {
        return false;
    }
}
exports.default = isNullOrUnfined;
;
var returnJson = function (data) {
    return Object.keys(data).map(function (key) { return ({ value: key, text: data[key] }); });
};
exports.returnJson = returnJson;
