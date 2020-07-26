"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcLib = void 0;
var CalcLib = /** @class */ (function () {
    function CalcLib() {
    }
    CalcLib.chainAdd = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var sum = 0;
        args.forEach(function (element) {
            sum += element;
        });
        return sum;
    };
    CalcLib.chainSub = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = args[0];
        args.slice(1).forEach(function (element) {
            result -= element;
        });
        return result;
    };
    return CalcLib;
}());
exports.CalcLib = CalcLib;
//# sourceMappingURL=index.js.map