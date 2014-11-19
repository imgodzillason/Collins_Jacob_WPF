/*
Jacob Collins
WPF- Section 1
Functions Worksheet
11/18/14
 */

//Calculate the circumference of a circle

function calcCircumference(){
    var radius = prompt("What is the radius of the circle?");
    finalCircumference = 2 * 3.14 * radius;
    console.log("The circumference of the circle is "+finalCircumference+ ".");
    return finalCircumference;

}
calcCircumference();