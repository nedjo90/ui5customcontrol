sap.ui.define([
    "sap/ui/core/Control"
],
    function (Control) {
        "use strict";

        return Control.extend("project1.controls.PersonListItem", {
            metadata: {
                properties: {
                    firstName: {
                        type: "string"
                    },
                    lastName: {
                        type: "string"
                    },
                    age: {
                        type: "int"
                    }
                },
                events: {
                    sayHello: {
                        parameters: {
                            message: {
                                type: "string"
                            }
                        }
                    }
                }
            },

            onclick: function () {
                this.fireSayHello({
                    message: this.getFirstName() + " " + this.getLastName() + " says hello!"
                })
            },

            onInit: function () {

            },

            myList({ }) {

            }
            ,
            renderer: function (oRm, oControl) {
                oRm.openStart("div");
                oRm.writeControlData(oControl);
                oRm.addClass("myPersonListItem");
                oRm.writeClasses();
                oRm.openEnd();

                oRm.write("<ul>");
                oRm.write("<li>" + oControl.getFirstName() + "</li>");
                oRm.write("<li>" + oControl.getLastName() + "</li>");

                let iAge = oControl.getAge();
                // console.log(typeof iAge)
                oRm.openStart("li")
                    .class(`${iAge > 18 ? "sapInfo" : "sapDanger"}`)
                    .openEnd().text(`( ${oControl.getAge()} )`)
                    .close("li");
                oRm.write("</ul>");
                oRm.close("div");
            }
        })
    });