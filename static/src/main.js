var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./models/MyClass"], function (require, exports, MyClass_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MyClass_1 = __importDefault(MyClass_1);
    var x = new MyClass_1.default();
    x.set('name', 'Hello, Dojo!');
    alert(x.get("name"));
});
