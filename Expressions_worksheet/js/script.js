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
var groceryTotals = ["Week One", "Week Two", "Week Three", "Week Four","Week Five"];

//defining value for groceries per week
groceryTotals [0] = prompt("How much did you spend on groceries the first week?");
groceryTotals [1] = prompt("How much did you spend on groceries the second week?");
groceryTotals [2] = prompt("How much did you spend on groceries the third week?");
groceryTotals [3] = prompt("How much did you spend on groceries the fourth week?");
groceryTotals [4] = prompt("How much did you spend on groceries the fifth week?");