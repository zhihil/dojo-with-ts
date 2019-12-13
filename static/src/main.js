var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "models/MyClass", "dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/dom-construct"], function (require, exports, MyClass_1, declare_1, _WidgetBase_1, _TemplatedMixin_1, dom_construct_1) {
    "use strict";
    exports.__esModule = true;
    MyClass_1 = __importDefault(MyClass_1);
    declare_1 = __importDefault(declare_1);
    _WidgetBase_1 = __importDefault(_WidgetBase_1);
    _TemplatedMixin_1 = __importDefault(_TemplatedMixin_1);
    dom_construct_1 = __importDefault(dom_construct_1);
    function main() {
        var x = new MyClass_1["default"]();
        x.set('name', 'Hello, Dojo!');
        alert(x.get("name"));
        var Widget = declare_1["default"]([_WidgetBase_1["default"], _TemplatedMixin_1["default"]], {
            templateString: '<div>Hello, world!</div>'
        });
        var widj = new Widget();
        var node = document.getElementById('widget');
        if (node === null) {
            console.error("No node detected");
            return;
        }
        dom_construct_1["default"].place(widj.domNode, node);
        widj.startup();
    }
    exports["default"] = main;
});
