define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.default = MyClass;
});
