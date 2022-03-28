/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojbootstrap','ojs/ojarraydataprovider','text!../json/directorio.json', 'text!../json/sedesBach.json', 'text!../json/sedesLic.json', 'text!../json/sedesMaes.json', "ojs/ojinputtext", 'ojs/ojknockout', 'ojs/ojtable'],
 function(oj,ko,ojbootstrap_1, ArrayDataProvider,dataDirectorio,dataSedeB,dataSedeL,dataSedeM) {
    function directorioViewModel() {
      
      this.connected = () => {
        
        document.title = "Directorio";
      
        // Implement further logic if needed
          this.buttonValue = ko.observable("interno");

          this.dataDirectorioArray = JSON.parse(dataDirectorio);
          this.dataSedeBachArray = JSON.parse(dataSedeB);
          this.dataSedeLicArray = JSON.parse(dataSedeL);
          this.dataSedeMaesArray = JSON.parse(dataSedeM);
          
          this.dataDirectorio = new ArrayDataProvider(this.dataDirectorioArray, {
          keyAttributes: "ext",
          implicitSort: [{ attribute:"ext", direction: "ascending" }],
        }); 

        this.dataSedeBachiller = new ArrayDataProvider(this.dataSedeBachArray, {
          keyAttributes: "id",
          implicitSort: [{ attribute:"id", direction: "ascending" }],
        }); 

        this.dataSedeLicenciatura = new ArrayDataProvider(this.dataSedeLicArray, {
          keyAttributes: "id",
          implicitSort: [{ attribute:"id", direction: "ascending" }],
        }); 
        
        this.dataSedeMaestria = new ArrayDataProvider(this.dataSedeMaesArray, {
          keyAttributes: "id",
          implicitSort: [{ attribute:"id", direction: "ascending" }],
        }); 

      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */

    return directorioViewModel;
  }
);
