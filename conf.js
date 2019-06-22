var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    //seleniumAddress:'http://localhost:4444/wd/hub', Direct Connect. Commmenting this line
    specs: ['calculator_dataprovider.js'],
    directConnect: true,
    jasmineNodeOpts: {
        showColors: true
    },
    suites:{
        smoke:['calculator_dataprovider.js']
    },
    onPrepare: function () {
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'target/screenshots'
            })
          );
    }
}