/*
 Jacob Collins
 WPF Section 01
 Conditionals Wacky
 11/13/14
 */

//alert user that information is needed
alert("It's the end of the world as we know it. Zombies are everywhere!");

//capture number of zombies
var zombies = prompt("How many zombies are there?");

//validate number entered
if(zombies ==""){
    alert("You did not enter a number.");
    prompt("How many zombies are there?");
}else{
    //print to console
    console.log("There are "+zombies+ " zombies around you!");
}

//capture number of weapons
var guns = prompt("How many guns do you have with you?");

//validate number entered
if(guns ==""){
    alert("You did not enter a number.");
    prompt("How many guns do you have?");
}else{
    //print to console
    console.log("You have "+guns+ " guns with you.");
}

//capture number of bladed weapons
var bladedWeapons = prompt("How many bladed weapons do you have?");

//validate number of bladed weapons
if(bladedWeapons==""){
    alert("You did not enter a number.");
    prompt("How many bladed weapons do you have?");
}