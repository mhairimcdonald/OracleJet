/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'text!../endpoints.json', 'my-employee-form-container/loader'],
 function(oj, ko, $, endpoints) {

    function IncidentsViewModel() {
      var self = this;

      self.employees = ko.observableArray();
      $.getJSON("http://localhost:3000/employees").
              then(function (data) {
                  var tempArray = [];
                  $.each(data, function () {
                      tempArray.push({
                          empno: this.id,
                          name: this.FIRST_NAME,
                          lastname: this.LAST_NAME,
                          hiredate: this.HIRE_DATE,
                          salary: this.SALARY
                      });
                  });
                  self.employees(tempArray);
              });
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);
