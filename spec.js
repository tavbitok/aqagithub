var util = require('util')

describe(' Automated tests using JS+Protractor, covering Registration form', function() {
	
	beforeEach(function(){
		browser.waitForAngularEnabled(false);
		browser.get('https://github.com');
		});
	
	afterEach(function(){
		console.log('TestCase complited successfully!');
		});

	it('Should able on correct page', function() {		
		expect(browser.getCurrentUrl()).toEqual('https://github.com/');
		});
		
	describe('Input invalid data in required fields Form of registration', function() {
	
		var home_page = require('home_page.js');
		var inputData = ['user', '@', 'user@mail.c'];
		var errorMessage = ['Username user is not available.', 'Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.', 'Email is invalid or already taken'];
		
		xit('Input invalid data#1 in Username field', function() {
			home_page.enterLogin(inputData[0]);
			browser.sleep(5000);
			var getErrorTextMessage = home_page.getErrorTextLogin;
			expect(getErrorTextMessage).toBe(errorMessage[0]);
			home_page.clearLogin();
		});
		
		xit('Input invalid data#2 in Username field', function() {
			home_page.enterLogin(inputData[1]);
			browser.sleep(5000);
			var getErrorTextMessage = home_page.getErrorTextLogin;
			expect(getErrorTextMessage).toBe(errorMessage[1]);
			home_page.clearLogin();
		});
		
		xit('Input invalid data in Email field', function() {
			home_page.enterEmail(inputData[2]);
			browser.sleep(5000);
			var getErrorTextMessage = home_page.getErrorTextEmail;
			expect(getErrorTextMessage).toBe(errorMessage[2]);
			home_page.clearEmail();
		});
	});
	
	
	describe('Input valid data in required fields Form of registration and Complete registration', function() {
		
		var home_page = require('home_page.js');
		var validUser = 'Robotester';
		var validEmail = 'robotester@gmail.com';
		var validPassword = 'Robo12345testeR';
		
		it('Input valid data in Username field, Email field and click Registration button', function() {
			home_page.enterLogin(validUser);
			browser.sleep(2000);
			home_page.enterEmail(validEmail);
			browser.sleep(2000);
			home_page.enterPassword(validPassword);
			browser.sleep(2000);
			home_page.clickRegistration();
		});
	});
});