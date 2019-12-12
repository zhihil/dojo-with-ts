import { IMyClass } from "models";
import Stateful from "dojo/Stateful";
import declare from "dojo/_base/declare";

interface MyClass extends IMyClass {}
class MyClass {
    name = "";
    age = 12;

    funct() {
        this.get('name')
    }
}

export default declare([Stateful], MyClass);
