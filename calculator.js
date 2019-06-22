function Calculator(){

    this.firstInput = element(by.model('first'));
    this.secondInput = element(by.model('second'));
    this.submit = element(by.id('gobutton'));
    this.result = element(by.tagName('h2'));

    this.add_numbers = function(a, b){
    this.firstInput.sendKeys(a);
    this.secondInput.sendKeys(b);
    this.submit.click();
    }
}
module.exports = new Calculator();