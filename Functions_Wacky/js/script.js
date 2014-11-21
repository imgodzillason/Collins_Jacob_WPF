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

function planetaryAge(){
    var choosePlanet = prompt("Select a planet and find out your age on that planet!");
    while(choosePlanet === ""){
        choosePlanet = prompt("Please enter a planet name.");
    }
    if (choosePlanet === "Mercury"){
        var mercury = Math.round(ageInDays / 88);
        console.log("You are approximately " +mercury+ " years old on Mercury.");
    }
   if(choosePlanet === "Venus"){
       var venus = Math.round(ageInDays / 224.7);
       console.log("You are approximately " +venus+ " years old on Venus");
   }
    if (choosePlanet === "Earth"){
        console.log("You're the same age as you are now!");
    }
    if (choosePlanet === "Mars"){
        var mars = Math.round( ageInDays /687);
        console.log("You are approximately " +mars+ " years old on Mars.");
    }
    if (choosePlanet === "Jupiter"){
        var jupiter = Math.round(ageInDays / 4332);
        console.log("You are approximately " +jupiter+ " years old on Jupiter.");
    }
}