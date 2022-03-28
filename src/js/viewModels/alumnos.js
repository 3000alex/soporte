/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(["knockout", "ojs/ojbootstrap", "ojs/ojarraydataprovider", "text!../json/alumnos.json", "ojs/ojknockout", "ojs/ojinputsearch",'ojs/ojtable',"ojs/ojradioset"],
 function(ko,ojbootstrap_1,ArrayDataProvider,dataAlu) {
    function DashboardViewModel() {
     
      
      this.connected = () => {
 
        document.title = "Buscar alumno";
        this.value = ko.observable();
        this.buttonValue = ko.observable("pagos");
        this.dataAluArray = JSON.parse(dataAlu);
        this.currentColor = ko.observable("red");
        this.typeQuery = [
            { id: "blueopt", value: "blue", type: "Matricula" },
            { id: "greenopt", value: "green", type: "Nombre completo" },
            { id: "redopt", value: "red", type: "Correo personal" },
            { id: "limeopt", value: "lime", type: "Correo Institucional" },
        ];

        this.suggestions = [
          { value: "IE", label: "Internet Explorer" },
          { value: "FF", label: "Firefox" },
          { value: "CH", label: "Chrome" },
          { value: "OP", label: "Opera" },
          { value: "SA", label: "Safari" },
        ];
        this.suggestionsDP = new ArrayDataProvider(this.suggestions, {
          keyAttributes: "value",
      });

      this.dataAlumnos = new ArrayDataProvider(this.dataAluArray, {
        keyAttributes: "id",
        implicitSort: [{ attribute:"id", direction: "ascending" }],
      }); 

      };

      this.disconnected = () => {
        // Implement if needed
      };

      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    return DashboardViewModel;
  }
);
