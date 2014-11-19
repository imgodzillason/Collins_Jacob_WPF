/*
Jacob Collins
WPF- Section 1
Functions Worksheet
11/18/14
 */

//Calculate the circumference of a circle

function calcCircumference(){
    var radius = prompt("What is the radius of the circle?");//request radius of circle
    finalCircumference = 2 * 3.14 * radius; //circumerence of circle equals 2 times pi (3.14) times radius
    console.log("The circumference of the circle is "+finalCircumference+ "."); //print result
    return finalCircumference;//return value

}
calcCircumference(); //call function for use

//Calculate the number of bee stings to kill an animal

function beeStings(){
    var victimWeight = prompt("What is the weight of the animal stung?"); //request weight of animal
    stingKills = 8.666666667 * victimWeight;//multiply number of bee stings by weight given by user
    console.log("It takes "+stingKills+ " bee stings to kill this animal.");//print result
    return stingKills;//return value
}

beeStings();//call function for use