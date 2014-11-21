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
    if (choosePlanet === "Mercury" || choosePlanet === "mercury"){
        var mercury = Math.round(ageInDays / 88);
        console.log("You are approximately " +mercury+ " years old on Mercury.");
    }
   if(choosePlanet === "Venus" || choosePlanet === "venus"){
       var venus = Math.round(ageInDays / 224.7);
       console.log("You are approximately " +venus+ " years old on Venus");
   }
    if (choosePlanet === "Earth" || choosePlanet === "earth"){
        console.log("You're the same age as you are now!");
    }
    if (choosePlanet === "Mars" || choosePlanet === "mars"){
        var mars = Math.round( ageInDays /687);
        console.log("You are approximately " +mars+ " years old on Mars.");
    }
    if (choosePlanet === "Jupiter" || choosePlanet === "jupiter"){
        var jupiter = Math.round(ageInDays / 4332);
        console.log("You are approximately " +jupiter+ " years old on Jupiter.");
    }
    if (choosePlanet === "Saturn" || choosePlanet === "saturn"){
        var saturn = Math.round(ageInDays / 10760);
        console.log("You are approximately " +saturn+ " years old on Saturn.");
    }
    if (choosePlanet === "Uranus" || choosePlanet === "uranus"){
        var uranus = ageInDays / 30700;
        console.log("You are approximately " +uranus+ " years old on Uranus.");
    }
    if (choosePlanet === "Neptune" || choosePlanet === "neptune"){
        var neptune = ageInDays / 60200;
        console.log("You are approximately " +neptune+ " years old on Neptune.");
    }if (choosePlanet === "Pluto" || choosePlanet === "pluto"){
        var pluto = ageInDays / 90600;
        console.log("I'm glad you still consider it a planet! You'd be approximately " +pluto+ " years old on Pluto.");
}
}

planetaryAge();