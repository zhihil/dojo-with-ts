declare module "dojo/_base/declare" {
    export default function dojo_declare(...args: any[]): any;
}

declare module "dojo/Stateful" {
    export default class Stateful {
        get<K extends keyof this>(name: K): this[K]
        set<K extends keyof this>(name: K, newVal: this[K]): void;
        watch<K extends keyof this>(name: K, callback: (propName?: K, oldVal?: this[K], newVal?: this[K]) => void): void;
    }
}

declare const define: Function;
