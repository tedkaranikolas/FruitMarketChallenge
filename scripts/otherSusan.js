$(document).ready(function() {

//ORIGINAL FUNCTION SENT THRU SLACK PREVIOUSLY
var random = 0;

// function randomizator(){
// 		return Math.floor(Math.random()*50) + 1;
// 		}

// setInterval(function() {
// 	random = randomizator();
// 	$('#test').text(random);
// },2000);  //NEED TO CHANGE TO 15000 AT END

//NEW PROPOSED CODE:
//STEP 1: Revise randomizer to be used for two random number generating events: set initial price and change price
function randomizator(min, max){
	 return Math.floor(Math.random() * (max - min) + min);
	 }

//STEP 2: create var for each fruit initial price and set each intial price to a random number between .50 and 9.99
var applePrice = randomizator(0.5, 9.99);
var orangePrice = randomizator(0.5, 9.99);
var bananaPrice = randomizator(0.5, 9.99);
var grapePrice = randomizator(0.5, 9.99);

//var fruitPrices = [applePrice, orangePrice, bananaPrice, grapePrice];
// console.log (fruitPrices); //PROBLEM - can return 0

//STEP 3: create Price Changer
//   A. Generate change in price with randomizer either up or down a max of .5
setInterval(function() {
	for (var i = 0; i < fruitPrices.length; i++) {
	random = randomizator(-0.5, 0.5);
	var newFruitPrice = fruitPrices[i] + random;
	console.log(newFruitPrice);
	// $('#test').text(fruitPrice);
}  //end loop
},2000); //end setInterval function

});  //end jQuery
