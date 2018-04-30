function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = [];
       
	   if(listA === null || listB === null){
	   	// Checks for invalid inputs, returns null if true
		   return null;
	   }

	   // Process lists if not null
		for (var i = 0, x = listA.length; i < x; i++){
	   	var nextValue = listA[i];

	   	// Each item in list b
			for (var ii = 0, xx = listB.length; ii < xx; ii++){
				// checks if element in listB is same as element in listA
				if(listB[ii] === nextValue){
					// If matching, add to the resultList array
					resultList.push(listB[ii]);
					break;
				}
			} // ends inner loop - working with listB
		} // ends outer loop - working with listA
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   
	   /*-------------------------------Insert your code here -------------------------------------*/ 
	   
	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   	   
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/

	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}	
	

}
