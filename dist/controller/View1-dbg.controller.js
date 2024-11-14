sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            },
            onSayHelloHandler: function (oEvent) {
                alert(oEvent.getParameter("message"));
            }
        });
    });