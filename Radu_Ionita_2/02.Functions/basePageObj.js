/**********************************************************************************
* 
*Created by: Radu Ionita
*
*Description: 
*
*
*
**********************************************************************************/
//var TaskName1 = "Task1"+(new Date().getMilliseconds())+(new Date().getTime())+(new Date().getSeconds());

/*//login
beforeEach(function(){
	CompanyEditGroup.login(data.URL,data.user,data.pass);
	browser.sleep(2000);
});
		
//Logout
afterEach(function (){
	CompanyEditGroup.logout();
});	*/


module.exports = (function () {
	
	var signOutButton = "//div[@id=':2i']/div[@class='Um-sn-Dn']";
	//*[@id=":2i"]/div
	var that = {};
	
	//Login butoon
	that.loginButtonClick = function (){
		return element (by.xpath('/html/body/nav/div/ul[2]/li[5]/a')).click();
	};
	
	//username field 
	that.typeUserNameField = function (username) {
			element (by.id("username")).clear();
		return element (by.id("username")).sendKeys(username);
		//return $('[id="username"]').sendKeys(username);
	};
	
	//password field
	that.typePasswordField = function (password) {
			element (by.id("password")).clear();
		return element (by.id("password")).sendKeys(password);
	};
	
	//uncheck
	that.uncheckStayLoggedIn = function () {
		return $('[for="remember"]').click();
	};
	
	//click login
	that.clickLogin = function () {
		return element (by.id("login-button")).click();
	};
	
	//click on arrow button to expand
	that.clickSettingsButton = function () {
		return element (by.xpath('/html/body/div[11]/div/div[3]/div[2]/div[3]/div/div[4]/i[2]')).click();
	};						///html/body/div[11]/div/div[3]/div[2]/div[3]/div/div[4]/i[2]
	
	//get text from email address field
	that.verifyEmail = function () {
		return element (by.xpath('//*[@id=":27"]/div[3]')).getText();
	};
	
	//signout button
	that.signOutButton = function () {
		//return element (by.xpath(signOutButton)).click ();
		//return element (by.xpath('//*[@id=":2m"]/div'));
		//return element (by.name("Sign out")).click;
		return $('[id=":2i"]').click();
		
		
		//*[@id=":2m"]/div
		//*[@id=":2g"]/div[1]
	};
	
	//login again is present
	that.loginAgainButton = function () {
		return element (by.xpath('/html/body/main/header/div/a')).isPresent ();
	};
	
	//add task field
	that.fillNewTaskField = function (taskname){
		element(by.xpath('/html/body/div[11]/div/div[5]/div[3]/div/div[2]/div[7]/div[2]/div[1]/div[2]/div')).clear();
		return element(by.xpath('/html/body/div[11]/div/div[5]/div[3]/div/div[2]/div[7]/div[2]/div[1]/div[2]/div')).sendKeys(taskname);
	};
	
	// click add task button
	that.addTaskButtonClick = function (){
		return element (by.xpath('/html/body/div[11]/div/div[5]/div[3]/div/div[2]/div[7]/div[2]/button')).click();
	};
	
	
	
	//scroll
    that.scrollElemFinderIntoView = function(elemFinder) {
    	var promise = browser.executeScript(function(elem) {
    		elem.scrollIntoView(false);
    	}, elemFinder);
    	return promise;
    };
    
    //about button
    that.aboutButton = element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[2]/a'));
    
    //about button click
    that.aboutButtonClick = function (){
    	return element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[2]/a')).click();
    };
	
	

	
	
	
	
	
	
	
	
	return that;
	
	
	
})();