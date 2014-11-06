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

//Slice of Pie part 1

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