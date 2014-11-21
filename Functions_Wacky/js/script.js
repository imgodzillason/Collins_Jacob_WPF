/*
Jacob Collins
WPF- Section 1
Functions_Wacky
11/20/14
 */
//prompt for user age
var age = prompt("How old are you?");
while(isNaN(age) || age ===""){//verify user entered number
    age = prompt("Please enter a number.");//request user enter number
}

console.log("Your age is " +age+ ".");//print user age

var ageInDays = age * 365;//find number of days old user is
console.log("You are " +ageInDays+ " days old.");//print user age in days

function planetaryAge(){//create function to find user age on other planets
    var choosePlanet = prompt("Select a planet and find out your age on that planet!");//prompt user to select planet
    while(choosePlanet === ""){//verify user entered information
        choosePlanet = prompt("Please enter a planet name.");//if user did not, prompt to enter information
    }
    if (choosePlanet === "Mercury" || choosePlanet === "mercury"){//do this if user selects mercury
        var mercury = Math.round(ageInDays / 88);
        console.log("You are approximately " +mercury+ " years old on Mercury.");
    }
   if(choosePlanet === "Venus" || choosePlanet === "venus"){//do this if user selects venus
       var venus = Math.round(ageInDays / 224.7);
       console.log("You are approximately " +venus+ " years old on Venus");
   }
    if (choosePlanet === "Earth" || choosePlanet === "earth"){//do this if user selects earth
        console.log("You're the same age as you are now!");
    }
    if (choosePlanet === "Mars" || choosePlanet === "mars"){//do this if user selects mars
        var mars = Math.round( ageInDays /687);
        console.log("You are approximately " +mars+ " years old on Mars.");
    }
    if (choosePlanet === "Jupiter" || choosePlanet === "jupiter"){//do this if user selects jupiter
        var jupiter = Math.round(ageInDays / 4332);
        console.log("You are approximately " +jupiter+ " years old on Jupiter.");
    }
    if (choosePlanet === "Saturn" || choosePlanet === "saturn"){//do this if user selects saturn
        var saturn = Math.round(ageInDays / 10760);
        console.log("You are approximately " +saturn+ " years old on Saturn.");
    }
    if (choosePlanet === "Uranus" || choosePlanet === "uranus"){//do this if user selects uranus
        var uranus = ageInDays / 30700;
        console.log("You are approximately " +uranus+ " years old on Uranus.");
    }
    if (choosePlanet === "Neptune" || choosePlanet === "neptune"){//do this if user selects neptune
        var neptune = ageInDays / 60200;
        console.log("You are approximately " +neptune+ " years old on Neptune.");
    }if (choosePlanet === "Pluto" || choosePlanet === "pluto"){//do this if user selects pluto
        var pluto = ageInDays / 90600;
        console.log("I'm glad you still consider it a planet! You'd be approximately " +pluto+ " years old on Pluto.");
}
}

planetaryAge();//call function to execute