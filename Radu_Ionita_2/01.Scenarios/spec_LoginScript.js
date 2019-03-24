/**********************************************************************************
* 
*Created by: Radu Ionita
*
*Description: login page
*
*
*
**********************************************************************************/

describe ('spec_LoginScript', function () {
	
	var loginPage = require ('../03.Pages/LoginPage.js');
	
	var testdata = require('../04.InputData/Login_InputData.json'); 
		testdata.forEach (function (data) {

	
	
	
	
	//positive scenario
	it ('login succesfully', function (){
		
		loginPage.loginSuccess (data.URL, data.username, data.password, data.username);
		console.log ("Logarea s-a efectutat cu succes")
	
	}); //close it
	
	
	
	it ('login - blank username', function (){
		
		loginPage.loginNoSuccess (data.URL, "", data.password);
		
		
	}); // close it
	
	
	it ('login - blank password', function (){
		
		loginPage.loginNoSuccess (data.URL, data.username, "");
		
		
	}); // close it
	
	
	it ('login - blank username and blank password', function (){
		
		loginPage.loginNoSuccess (data.URL, "", "");
		
		
	}); // close it
	
	
	});//close testdata
	
});