/*
 Jacob Collins
 WPF Section 01
 Conditionals Industry
 11/12/14
 */

//obtain user info on number of hours needed to complete site
var hoursNeeded = prompt("How many hours do you need to complete the client's website?");
//validate number was entered
if(hoursNeeded == ""){
    //alert user no number was entered and prompt for number again
    alert("You didn't enter any numbers.");
    prompt("How many hours do you need to complete the client's website?");
}else{
    //print to console
    console.log("The client's site requires " +hoursNeeded+ " hours to complete.")
}

//obtain number of employees working on site
var numberOfEmployees = prompt("How many employees do you have working on the site?");
//validate number was entered
if(numberOfEmployees == ""){
    //alert user no number was entered and prompt for number again
    alert("You didn't enter any numbers.");
    prompt("How many employees do you have working on the site?");
}else{
    //print to console
    console.log("You have " +numberOfEmployees+ " employees working on the client's site.");
}

//number of hours per person
var hoursPerEmployee = Math.round((+hoursNeeded) / (+numberOfEmployees));

//print to console
console.log("Each employee needs to work " +hoursPerEmployee+ " hours to complete the project in a week.");

//determine if we need to hire a temp to complete site on time
if (hoursPerEmployee >= 40 || hoursNeeded >= 1000){
    //print to console if need to hire temp
    console.log("Each employee will work " +hoursPerEmployee+ " hours this week. You should consider hiring a temp to complete this on time.")
}else{
    //print to console if don't need to hire temp
    console.log("Each employee will work " +hoursPerEmployee+ " hours this week. You do not need to hire a temp.")
}