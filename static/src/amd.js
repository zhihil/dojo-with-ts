"use strict";
/// <amd-dependency path="dojo/_base/declare" name="dojo_declare" />
var MyClass = dojo_declare(null, {
    x: 'hello, world!'
});
var y = new MyClass();
console.log(y.x);
