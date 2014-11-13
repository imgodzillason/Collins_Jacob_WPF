/*
 Jacob Collins
 WPF Section 01
 Conditionals Wacky
 11/12/14
 */

//alert user that information is needed
alert("It's the end of the world as we know it! Zombies are everywhere O_O");

//capture number of zombies
var zombies = prompt("How many zombies are there?");

//validate number entered
if(zombies ==""){
    alert("You did not enter a number.");
    prompt("How many zombies are there?");
}else{
    //print to console
    console.log("There are "+zombies+ " around you!");
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
var bladedWeapons = prompt("How many bladed weapons do you have with you?");

//validate number entered
if(bladedWeapons ==""){
    alert("You did not enter a number.");
    prompt("How many bladed weapons do you have with you?");
}else{
    //print to console
    console.log("You have " +bladedWeapons+ " bladed weapons with you.");
}

//Determine if user is indoor or outdoors
var location = prompt("Are you indoors or outdoors?");

//validate answer entered
if(location ==""){
    alert("You did not enter an answer.");
    prompt("re you indoors or outdoors?");
}else{
    //print to console
    console.log("You are located "+location+ ".");
}

//determine user's chances of survival
if(zombies > 5 && location == "outdoors"){
    //print to console
    console.log("Fight for your life! Your chances are pretty slim though.");
}else if(zombies > 5 && location == "indoors"){
    //print to console
    console.log("You have a better chance being indoors, but you need to get rid of them!")
}else{
    //print to console
    console.log("Looking good, kid! We'll make a survivor of you yet!");
}