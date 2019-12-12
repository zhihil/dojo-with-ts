/// <amd-dependency path="dojo/_base/declare" name="dojo_declare" />

declare const dojo_declare: Function;

const MyClass = dojo_declare(null, {
    x: 'hello, world!'
});

const y = new MyClass();

console.log(y.x);
