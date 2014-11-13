/*
 Jacob Collins
 WPF Section 01
 Conditionals Industry
 11/12/14
 */

//obtain user info on number of hours needed to complete site
var siteHoursNeeded = prompt("How many hours do you need to complete the client's website?");
if(siteHoursNeeded = ""){
    alert("You didn't enter any numbers.");
    prompt("How many hours do you need to complete the client's website?");
}else{
    //print to console
    console.log("The client's site requires" +siteHoursNeeded+ " hours to complete.")
}

//obtain number of employees working on site
var numberOfEmployees = prompt("How many employees do you have working on the site?");
if(numberOfEmployees = ""){
    alert("You didn't enter any numbers.");
    prompt("How many employees do you have working on the site?");
}else{
    //print to console
    console.log("You have " +numberOfEmployees+ " employees working on the client's site.");
}

