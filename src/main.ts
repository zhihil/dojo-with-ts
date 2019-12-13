import MyClass from "models/MyClass";
import _WidgetBase from "dijit/_WidgetBase";
import _TemplatedMixin from "dijit/_TemplatedMixin";
import domConstruct from "dojo/dom-construct";
import dojo_declare from "dojo/_base/declare";

export default function main() {
    const x = new MyClass();
    x.set('name', 'Hello, Dojo!');
    alert(x.get("name"));

    const Widget = dojo_declare([_WidgetBase, _TemplatedMixin], {
        templateString: '<div>Hello, world!</div>'
    });

    const widj: any = new Widget();
    const node = document.getElementById('widget');
    if (node === null) {
        console.error("No node detected");
        return;
    }
    domConstruct.place(widj.domNode, node);
    widj.startup();
}
