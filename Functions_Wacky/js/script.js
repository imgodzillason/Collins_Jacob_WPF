/*
Jacob Collins
WPF- Section 1
Functions_Wacky
11/20/14
 */

var age = prompt("How old are you?");
while(isNaN(age) || age ===""){
    age = prompt("Please enter a number.");
}

console.log("Your age is " +age+ ".");

var ageInDays = age * 365;
console.log("You are " +ageInDays+ " days old.");
