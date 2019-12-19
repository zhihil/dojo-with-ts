declare module "dojo/_base/declare" {
    interface DojoClass<T> {
        new(...args: any[]): DojoClass<T> & T;
    }
    function dojo_declare<T1,V>(mixins: [T1], prototype: V): DojoClass<T1 & V> & T1 & V;
    function dojo_declare<T1,T2,V>(mixins: [T1, T2], prototype: V): DojoClass<T1 & T2 & V> & T1 & V & T1 & T2 & V;
    function dojo_declare<T1,T2,T3,V>(mixins: [T1, T2, T3], prototype: V): DojoClass<T1 & T2 & T3 & V> & T1 & V & T1 & T2 & T3 & V;
    export default dojo_declare;
}

declare module "dojo/Stateful" {
    export default class Stateful {
        get<K extends keyof this>(name: K): this[K]
        set<K extends keyof this>(name: K, newVal: this[K]): void;
        watch<K extends keyof this>(name: K, callback: (propName?: K, oldVal?: this[K], newVal?: this[K]) => void): void;
    }
}

declare module "dojo/dom-construct" {
    export function place(widget: HTMLElement | string, id: HTMLElement | string, position?: string): void;
    export function create(tag: string | HTMLElement, attrs?: object, refNode?: string | HTMLElement, pos?: string): HTMLElement;
}

declare module "dojo/query" {
    export default function query(queryString: string): NodeList[];
}

declare module "dojo/parser" {
    export function parse(): void;
}

declare module "dijit/_WidgetBase" {
    export default class _WidgetBase {
        public domNode: HTMLElement;

        public startup(): void;
    }    
}

declare module "dijit/_TemplatedMixin" {
    export default class _TemplatedMixin {}
}

declare module "dijit/_WidgetsInTemplateMixin" {
    export default class _WidgetsInTemplateMixin {}
}

declare module "dijit/form/Button" {
    export default class Button {}
}

declare const define: Function;
