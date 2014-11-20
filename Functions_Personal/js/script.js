/*
Jacob Collins
WPF- Section 1
11/20/14
Functions_Personal
 */

//set up variable requesting square feet
var squareFeet = prompt("How many square feet is the room?");
while((isNaN(squareFeet) || squareFeet === "")){
    squareFeet = prompt("Please enter a number.");
}

console.log("The room is "+squareFeet+ " square feet.");

var amount = prompt("How much is the tile you want to purchase per square foot?");
while((isNaN(amount) || amount ==="")){
    amount = prompt("Please enter a number");
}

console.log("The amount you entered for your tile is $" +amount+ ".");

var budget = prompt("How much have you budgeted to spend on tile?");
while ((isNaN(budget) || budget ==="")){
    budget = prompt("Please enter an amount.");
}

console.log("You have allotted $" +budget+ " to spend on tile.");

var finalPrice = function (){
    totalCost = Math.round(squareFeet * amount);
    console.log("The total amount of the tile will be $" + totalCost+ ".");
    return totalCost;
}

finalPrice();

var canAfford = (finalPrice >= budget) ? console.log("You can afford to purchase the tile!") : console.log("You cannot afford to purchase the tile.")