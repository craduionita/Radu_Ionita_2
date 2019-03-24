/**********************************************************************************
* 
*Created by: Radu Ionita
*
*Description: add task
*
*
*
**********************************************************************************/

module.exports = (function (addNewTask){
	
	addNewTask.newTask = function (taskname){
		
		//verify number of tasks

		//fill Add task field
		addNewTask.fillNewTaskField (taskname);
		browser.sleep (10000);
		
		//click add task
		addNewTask.addTaskButtonClick ();
		browser.sleep (10000);
		
		//verify number of tasks
		
		
		
	};
	
	
	
	
	
	
	
	return addNewTask
	
})(require('../02.Functions/basePageObj.js'));