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
$(document).ready(function() {

//ORIGINAL FUNCTION SENT THRU SLACK PREVIOUSLY
var random = 0;

// function randomizator(){
// 		return Math.floor(Math.random()*50) + 1;
// 		}

// setInterval(function() {
// 	random = randomizator();
// 	$('#test').text(random);
// },2000);  //NEED TO CHANGE TO 15000 AT EN

//NEW PROPOSED CODE:
//STEP 1: Revise randomizer to be used for two random number generating events: set initial price and change price
 function randomizator(min, max){
 	 return Math.floor(Math.random() * (max - min) + min);
 	 }

 //STEP 2: create var for each fruit initial price and set each intial price to a random number between .50 and 9.99
 var applePrice = randomizator(5, 999) / 100;
 var orangePrice = randomizator(5, 999) / 100;
 var bananaPrice = randomizator(5, 999) / 100;
 var grapePrice = randomizator(5, 999) / 100;


var fruitPrices = [applePrice, orangePrice, bananaPrice, grapePrice];
// console.log (fruitPrices); //PROBLEM - can return 0
//STEP 3: create Price Changer
//   A. Generate change in price with randomizer either up or down a max of .5 and add to current price
setInterval(function() {
	for (var i = 0; i < fruitPrices.length; i++) {
	random = randomizator(-5, 5) / 100 + randomizator(-5, 5) / 10;
	// console.log(random);
	var newFruitPrice = fruitPrices[i] + random;
	console.log(newFruitPrice);
	// $('#test').text(fruitPrice);
}  //end loop
},2000); //end setInterval function


});  //end jQuery
