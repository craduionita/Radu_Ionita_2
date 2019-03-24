/**********************************************************************************
* 
*Created by: Radu Ionita
*
*Description: scroll examples
*
*
*
**********************************************************************************/

module.exports = (function (scrollExamples) {
	
	scrollExamples.scrollElements = function (URL){
		
		//load page
		browser.get (URL);
		
		//scroll to button
		scrollExamples.scrollElemFinderIntoView (scrollExamples.aboutButton);
		browser.sleep (10000);		
		
		//click about button
		scrollExamples.aboutButtonClick();
		
		
	};
	
	
	
	return scrollExamples
	
})(require('../02.Functions/basePageObj.js'));