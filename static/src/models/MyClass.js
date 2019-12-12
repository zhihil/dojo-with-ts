var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "dojo/Stateful", "dojo/_base/declare"], function (require, exports, Stateful_1, declare_1) {
    "use strict";
    exports.__esModule = true;
    Stateful_1 = __importDefault(Stateful_1);
    declare_1 = __importDefault(declare_1);
    var MyClass = /** @class */ (function () {
        function MyClass() {
            this.name = "";
            this.age = 12;
        }
        MyClass.prototype.funct = function () {
            this.get('name');
        };
        return MyClass;
    }());
    exports["default"] = declare_1["default"]([Stateful_1["default"]], MyClass);
});
