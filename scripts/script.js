// variables to store fruit cost and we can find the number purchased from the length of the array
var apples = [2];
var oranges = [];
var bananas = [];
var grapes = [];

var totalCost = 0;
var avgCost = 0;
var inventory = 0;
var totalCash = 0;
//var totalCash = 100;

// get input from the DOM by jquery // not quite sure what this is going to do yet...
$(document).ready(function(){
	var applesBought = $('#buyAppleIn').val();
	console.log('applesBought: ' + applesBought);
});

// function to calculate apple average cost and inventory
var appleInventory = function(){
	console.log('in apple, button clicked');
	for(var i=0; i<apples.length; i++){
		// calculation for average cost
		totalCost += apples[i];
		avgCost = totalCost / apples.length;
		console.log('in appleInventory, average cost: ' + avgCost);
		// calculation for inventory
		inventory = apples.length;
		console.log('in appleInventory, inventory: ' + apples.length);
	}

	// append to DOM
	document.getElementById('appleQty').innerHTML = inventory;
	document.getElementById('appleAvgCost').innerHTML = avgCost;


};
