/**********************************************************************************
* 
*Created by: Radu Ionita
*
*Description: scroll
*
*
*
**********************************************************************************/

describe ('spec_ScrollExamples', function (){
	
	var scrollExamples = require ('../03.Pages/ScrollExamples.js');
	
	var testdata = require('../04.InputData/Login_InputData.json'); 
		testdata.forEach (function (data) {
	
	
			
	it ('scroll', function (){
		
		scrollExamples.scrollElements (data.URL);
		
	});
		
		
	});//close testdata
	
});


