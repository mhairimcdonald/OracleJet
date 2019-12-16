/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./my-employee-form-container-view.html', './my-employee-form-container-viewModel', 'text!./component.json', 'css!./my-employee-form-container-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('my-employee-form-container', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);