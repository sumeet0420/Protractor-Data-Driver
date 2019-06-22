"use strict"
var using = require('jasmine-data-provider');
var data_provider = require('./calculator_data');
describe("To perform end-to-end testing on Calculator site", () => {

  function Calculator(){
    this.firstInput = element(by.model('first'));
    this.secondInput = element(by.model('second'));
    this.submit = element(by.id('gobutton'));
    this.result = element(by.tagName('h2'));
  }

  var calc = new Calculator();

  function add_numbers(a, b){
    calc.firstInput.sendKeys(a);
    calc.secondInput.sendKeys(b);
    calc.submit.click();
}

  using(data_provider.data, function(inputData, description){
    it('Testing Calculator - '+description, done => {
      browser.get('http://juliemr.github.io/protractor-demo/');
      add_numbers(inputData.input_a, inputData.input_b);
      expect(calc.result.getText()).toEqual(inputData.expected);
      done();
    });
  });
});