/*
Jacob Collins
WPF Section 01
Activity: Conditionals Worksheet
11/11/2014
 */

//set up var conversion for Celsius and Fahrenheit
var celsius = (fahrenheit - 32) / (5/9);
var fahrenheit = (celsius - 32) * (5/9);














//obtain user info about temperature
var temp = prompt("What is the temperature outside?");

//obtain user info about Celsius or Fahrenheit
var tempMeasure = prompt ("Do you want it converted to Celsius or Fahrenheit? Enter C for Celsius and F for Fahrenheit.");

//convert measurements for temp.
if(tempMeasure === "C"){
    console.log("The temperature is " +((temp - 32) * (5/9))+ " degrees Celsius");
}
if(tempMeasure === "F"){
    console.log("The temperature is "+((temp * (9/5)) +32)+ " degrees Fahrenheit");
}