import { IMyClass } from "models";

interface MyClass extends IMyClass {}
class MyClass {
    name = "";
    age = 12;

    funct() {
        this.get('name')
    }
}

export default MyClass;
