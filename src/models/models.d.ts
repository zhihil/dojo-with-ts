/// <reference path="../dojo.d.ts" />

import Stateful from "dojo/Stateful";

export interface IMyClass extends Stateful {
    name: string;
    age: number;
}
