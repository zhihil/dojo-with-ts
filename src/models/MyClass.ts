import { IMyClass } from "./models";
import Stateful from "dojo/Stateful";
import dojo_declare from "dojo/_base/declare";

interface MyClass extends IMyClass {}
class MyClass {
    name = "";
    age = 12;

    funct() {
        this.get('name')
    }
}

export default dojo_declare([Stateful], MyClass);
