/**********************************************************************************
* 
*Created by: Radu Ionita
*
*Description: login page
*
*
*
**********************************************************************************/

module.exports = ('logout', function (logoutFunction) {
	
	
	logoutFunction.signOutFunction = function (){
		
		//click arrow
		//logoutFunction.clickSettingsButton ();
		
		//click sign out
		logoutFunction.signOutButton ();
		
		//check login button
		expect (logoutFunction.loginAgainButton()).toBeTruthy ();
			
	};
	
	logoutFunction.newLogOut = function (){
		
		//click arrow
		logoutFunction.clickSettingsButton ();
		
		//click sign out
		logoutFunction.signOutButton ();
		browser.sleep(5000);
		
		//check login button
		expect (logoutFunction.loginAgainButton()).toBeTruthy ();
		
	};
	
	
	
	return logoutFunction;
	
})(require('../02.Functions/basePageObj.js'));