/*
 Jacob Collins
 WPF Section 01
 Expressions_Personal
 11/5/2014
 */

/*alert("test");*/

//Ask user their name
var name = prompt("What is your name?");

//ALERT user
alert("Hello "+name+", we're going to determine the number of hours you will have to work to purchase different gaming consoles.");

//console.log output
console.log(name+ " is the name of the user.");

//Adding in arrays
var gamingConsoles = ["Xbox One", "Playstation 4", "Wii U"];

//adding values for gamingConsoles
gamingConsoles [0] = 349.99;
gamingConsoles [1] = 399.99;
gamingConsoles [2] = 299.99;

//Requesting information on hourly rate

var payPerHour = prompt("How much do you make per hour?");

//console.log output for payPerHour
console.log(name+ " makes $"+payPerHour+ "per hour");
