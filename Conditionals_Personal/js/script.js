/*
Jacob Collins
WPF Section 01
Conditionals Personal
11/12/14
 */

//obtain values for caloric intake for breakfast
var breakfast = prompt("How many calories did you have for breakfast?");

//make sure values aren't empty
if(breakfast == ""){
    alert("You forgot to input a number.");
    prompt("How many calories did you have for breakfast?");
}else{
    //print to console
    console.log("You had "+breakfast+ " calories at breakfast.")
    alert("We will now ask for your lunch calories.")
}

//obtain values for caloric intake for lunch
var lunch = prompt("How many calories did you have for lunch?");

//make sure values aren't empty
if(lunch == ""){
    alert("You forgot to input a number.");
    prompt("How many calories did you have for lunch?")
}else{
    //print to console
    console.log("You had "+lunch+ " calories at lunch.")
    alert("We will now ask for your dinner calories.");
}

var dinner = prompt("How many calories did you have for dinner?");
if (dinner =""){
    alert("You forgot to input a number.");
    prompt("How many calories did you have for dinner.");
}else{
    //print to console
    console.log("You had "+dinner+ " calories at dinner.");
}

