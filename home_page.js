var home_page = function() {
	
	this.enterLogin = function(value) {
		element(by.id('user[login]')).sendKeys(value);
	};
	
	this.clearLogin = function(value) {
		element(by.id('user[login]')).clear();
	};
	
	this.enterEmail = function(value) {
		element(by.id('user[email]')).sendKeys(value);
	};

	this.clearEmail = function(value) {
		element(by.id('user[email]')).clear();
	};
	
	this.enterPassword = function(value) {
		element(by.id('user[password]')).sendKeys(value);
	};
	
	this.getErrorTextLogin = function() {
		return element(by.css('.mb-1')).getText();
	};
	
	this.getErrorTextEmail = function() {
		return element(by.xpath('//dd[@class="error"]')).getText();
	};
	
	this.clickRegistration = function() {
		element(by.css('.btn-mktg.btn-primary-mktg.btn-large-mktg.f4.btn-block.my-3')).click();
	};
	
	this.ConfimValidLogin = function() {
		element(by.css('.form-control.form-control-lg.input-block.is-autocheck-successful')).click();
	};
	
	this.ConfimValidEmail = function() {
		element(by.css('.form-control.form-control-lg.input-block.js-email-notice-trigger.is-autocheck-successful')).click();
	};
	
};
module.exports = new home_page();