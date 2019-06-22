"use strict"
var using = require('jasmine-data-provider');
var data_provider = require('./calculator_data');
var calc = require('./calculator');
describe("To perform end-to-end testing on Calculator site", () => {

  using(data_provider.data, function(inputData, description){
    it('Testing Calculator - '+description, done => {
      browser.get('http://juliemr.github.io/protractor-demo/');
      calc.add_numbers(inputData.input_a, inputData.input_b);
      expect(calc.result.getText()).toEqual(inputData.expected);
      done();
    });
  });
});