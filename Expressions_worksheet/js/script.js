/*
 Jacob Collins
 WPF Section 01
 Expressions Worksheet
 11/5/2014
 */

//alert("test");

//Dog Years

//Ask user how old Sparky is
var sparkyAge = prompt("How old is Sparky?");

//Sparky's age multiplied by 7, or dog years
var sparkyDogYears = sparkyAge * 7

//print output for Sparky's age in dog years
console.log("Sparky is " +sparkyAge+" human years old, which is "+sparkyDogYears+" in dog years.");

//Slice of Pie part I
//ALERT user to change of questions
alert("We will now discuss a pizza party!");

//Slices of pizza input by user
var slicesPerPizza = prompt("How many slices of pizza are there per pizza?");

//Number of people at party input by user
var peopleAtParty = prompt("How many people are at the party?");

//Number of pizzas ordered input by user
var pizzasOrdered = prompt ("How many pizzas were ordered?");

//Number of slices per person
//Multiply slices of pizza by the number of pizzas ordered and divide it by the number of people at the party
var slicesPerPerson = (slicesPerPizza * pizzasOrdered) / peopleAtParty;

//print output for number of slices each person gets
console.log("Each person ate "+slicesPerPerson+" slices of pizza at the party.");

//Slice of Pie part II

//round slices per person to nearest whole number
var roundedSlicesPerPerson = Math.round(slicesPerPerson);

//total number of slices
var totalSlices = slicesPerPizza * pizzasOrdered

//Determine how many pieces Sparky gets by subtracting totalSlices by roundedSlicesPerPerson
var sparkysPizza = totalSlices - (roundedSlicesPerPerson *peopleAtParty);

//print output for number of slices Sparky gets
console.log ("Sparky got " +sparkysPizza+" slices of pizza.");

//Alert user to change of questions
alert("Now we're going to find out how much you spend on groceries!");

//Average Shopping Bill
//define array for five weeks of grocery shopping
var groceryTotals = [100, 250, 150, 145, 310]

//total amount spent on groceries

var fiveWeeksOfGroceries = groceryTotals [0] + groceryTotals [1] + groceryTotals [2] + groceryTotals [3] + groceryTotals [4];

//average spent per week

var averageGroceryBill = fiveWeeksOfGroceries / 5;

//Print output for five weeks of groceries and average
console.log("You have spent a total of $"+fiveWeeksOfGroceries+" on groceries over 5 weeks. That is an average of $"+averageGroceryBill+" per week.");

//Discounts

//ALERT user of question changes
alert("We'll now determine how much of a discount you'll receive!");

//obtain original price, discount percentage, item name, and sales tax percentage from user
var itemName = prompt("What is the name of the item?");
var originalPrice = prompt("What is the original price of "+itemName+"?");
var discountPercentage = prompt ("What is the discount percentage?");
var salesTax = prompt ("What is the sales tax in your area?");

//Price of item after discount

var afterDiscount =  (originalPrice) - (originalPrice * (discountPercentage/100));

//Amount of tax on item
var taxAmount = afterDiscount * (salesTax / 100);

//Amount of item plus tax
var itemWithTax = taxAmount + afterDiscount;

//Print output for item with and without tax
console.log("Your "+itemName+" was originally $"+originalPrice+", but after a "+discountPercentage+"% discount, it is now $"+afterDiscount+" without tax and $"+itemWithTax+" with tax.");