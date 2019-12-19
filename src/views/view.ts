/// <reference path="views-plugins.d.ts" />

import dojo_declare from "dojo/_base/declare";
import domConstruct from "dojo/dom-construct";
import _WidgetBase from "dijit/_WidgetBase";
import _TemplatedMixin from "dijit/_TemplatedMixin";
import _WidgetsInTemplateMixin from "dijit/_WidgetsInTemplateMixin";
import template from "dojo/text!../templates/viewTemplate.html";
import "dijit/form/Button";
import "dojo/domReady!"
import { IViewTemplateTest } from "./views";

interface ViewTemplateTest extends IViewTemplateTest {}
class ViewTemplateTest {
    templateString = template;
    domNode: HTMLElement = null;

    startup() {
        const newNode = domConstruct.create("div", {
            innerHTML: "Hello, world! I was inserted by ViewTemplateTest!"
        });
        domConstruct.place(newNode, this.domNode);
    }
}

export default dojo_declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], ViewTemplateTest.prototype);
