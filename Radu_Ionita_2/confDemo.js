//var Jasmine2HtmlReporter = require('D:/ProtractorTests/DEMO/node_modules/protractor-jasmine2-screenshot-reporter');
var Jasmine2HtmlReporter = require('C:/Users/User1064/eclipse-workspace/Radu_Ionita_2/node_modules/protractor-jasmine2-screenshot-reporter');


var timeStamp = new Date().getTime();   


exports.config = {
		//The address of a running selenium server
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		
		directConnect: true,
		
		//Capabilities to be passed to the webdriver instance.
		capabilities:{
			'browserName':'chrome'

		},
			
		//Framework to use: Jasmine
		framework:'jasmine',
		
		onPrepare: function() {
			//browser.driver.manage().window().maximize();
			browser.driver.manage().window().maximize();
			
            jasmine.getEnv().addReporter(
              new Jasmine2HtmlReporter({
            	  savePath: 'C:/Users/User1064/eclipse-workspace/Radu_Ionita_2/target/screenshots',
                         showSummary: true,
                         showQuickLinks: true,
                         showConfiguration: true,
                         screenshotsFolder: 'images',
                         takeScreenshots: true,
                         takeScreenshotsOnlyOnFailures: true,
                         fixedScreenshotName: true,
                         ignoreSkippedSpecs: true,
                         consolidate: true,
                         consolidateAll: true,
                         preserveDirectory: true,                                                                                                          
                         fileName: 'Protractor-Execution-Report-' + timeStamp                                          
              })
            );
         },
		
		      // Options to be passed to Jasmine.
		      jasmineNodeOpts: {
		    	    showColors: true,
		    	    isVerbose: true,
		    	    realtimeFailure: true,
		    	    includeStackTrace: true,
		    	   // DEFAULT_TIMEOUT_INTERVAL: 30000
		    	    defaultTimeoutInterval: 500000
		    	  }, 
	    	  
		    	  
		    	  
		    	  
		    	  
		    	  // specs: ['../Radu_Ionita_2/01.Scenarios/spec_LoginScript.js'] 	  
		    	  // specs: ['../Radu_Ionita_2/01.Scenarios/spec_SignOuScript.js']
		    	  // specs: ['../Radu_Ionita_2/01.Scenarios/spec_AddNewTask.js']
		    	   specs: ['../Radu_Ionita_2/01.Scenarios/spec_ScrollExamples.js']
		    	// specs: ['../']
		    	// specs: ['../']
		    	  


/*suites:{		    	  
		    			suite:[
							'../DEMO_SIIT/01.Scenarios/spec_OpenPage.js',
							'../DEMO_SIIT/01.Scenarios/spec_CheckLearnButtons.js',

		    				] 
		    		},	*/    	 

};