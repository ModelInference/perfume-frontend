"use strict";

var webdriver = require('selenium-webdriver');
var assert = require('assert');

// run test without connecting to sauce - requires ChromeDriver download
// https://code.google.com/p/selenium/wiki/ChromeDriver
// var driver = new webdriver.Builder().
//    withCapabilities(webdriver.Capabilities.chrome()).
//    build();

// settup sauce username and access key using mac or linux:
// https://docs.saucelabs.com/tutorials/js-unit-testing/
// echo "export SAUCE_USERNAME=$username
// export SAUCE_ACCESS_KEY=$saucekey" >> ~/.bash_profile &&
// source ~/.bash_profile

var sauce = 'http://ondemand.saucelabs.com:80/wd/hub';
var driver = new webdriver.Builder().
    usingServer(sauce).
    withCapabilities({
        browserName: 'Chrome',
        platform: 'Windows 2012',
        name: 'Form clear after returning to Input tab',
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY
    }).
    build();

function clickInput() {
	driver.findElement(webdriver.By.name('Input')).click();
}

function assertFormDisplayed() {
	driver.findElement(webdriver.By.id('logtext')).getAttribute('value').then(function(value) {
		assert.strictEqual(value, '', 'Form has not been cleared after clicking parse.');
	});

}
 
function handleFailure(err) {
    console.error('Something went wrong\n', err.stack, '\n');
    closeBrowser();
}
 
function closeBrowser() {
    driver.quit();
}

driver.get('http://ohmann.bitbucket.org/perfume/');
driver.findElement(webdriver.By.id('bandwithform')).click(); //click first example
driver.findElement(webdriver.By.name('button1id')).click(); //parse

driver.wait(function() {
	var model = driver.findElement(webdriver.By.id('model'));
	return model.isDisplayed();
}, 10000).then(clickInput);

driver.wait(function() {
	var input = driver.findElement(webdriver.By.name('Input'));
	return input.isDisplayed();
}, 5000).then(assertFormDisplayed).then(closeBrowser, handleFailure);