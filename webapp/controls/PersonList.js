sap.ui.define([
    "sap/ui/core/Control"
],
    function (Control) {
        "use strict";

        return Control.extend("project1.controls.PersonList", {
            metadata: {
                properties: {
                    title: {
                        type: "string",
                        defaultValue: "Persons"
                    }
                },
                aggregations: {
                    items: {
                        type: "project1.controls.PersonListItem",
                        multiple: true
                    }, 
                },
                defaultAggregation: 'items'
            },

            onInit: function () {

            },
            renderer: function (oRm, oControl) {
                oRm.openStart("div");
                oRm.writeControlData(oControl);
                oRm.addClass("myPersonList");
                oRm.writeClasses();
                oRm.openEnd();

                oRm.write("<h2>" + oControl.getTitle() + "</h2>");
                oRm.write("<ul>");

                let aItems = oControl.getAggregation("items");
                for (let iIdx = 0; iIdx < aItems.length; iIdx++) {
                    oRm.write("<li class='myPersonListItemSelector'>")
                    oRm.renderControl(aItems[iIdx]);
                    oRm.write("</li>");
                }

                oRm.write("</ul>");
                oRm.close("div");
            }
        })
    });