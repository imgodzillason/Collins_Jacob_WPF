/*
 Jacob Collins
 WPF Section 01
 Expressions_Wacky
 11/5/2014
 */

//alert ("test")

//Ask user their name
var name = prompt("What is your name?");

//console.log output for name
console.log ("The user's name is "+name+".");

//Ask the user what show they're watching
var nameOfShow = prompt(name+", we're going to determine the amount of time you'll spend watching a series on Netflix. What show are you currently watching?");

//console.log output for name of show
console.log(name+ " is currently watching "+nameOfShow+".");

//ALERT user of choice
alert ("You're watching "+nameOfShow+", which is a most excellent choice!");

//Ask user how many seasons there are
var numberOfSeasons = prompt("How many seasons are there in "+nameOfShow+"?");

//console.log for number of seasons
console.log("There are "+numberOfSeasons+" seasons in "+nameOfShow+".");

//Ask user how long each episode is
var lengthOfShow = prompt("So, in minutes, about how long is each episode, "+name+"?");

//console.log output for length of show
console.log ("Each episode of " +nameOfShow+ " is "+lengthOfShow+" minutes long");

//Ask user number of episodes per season
var numberOfEpisodes = prompt("How many episodes are there per season, "+name+"?");

//console.log for number of episodes
console.log ("There are "+numberOfEpisodes+" episodes per season of " +nameOfShow+".");

//Determine minutes and hours of show available
var minutesOfShow = (lengthOfShow * numberOfEpisodes) * numberOfSeasons;
var hoursOfShow = ((lengthOfShow * numberOfEpisodes) * numberOfSeasons) / 60;

//console.log output for minutes and hours of show
console.log ("There are "+minutesOfShow+ " minutes of "+nameOfShow+" available to watch.");
console.log ("There are "+hoursOfShow+ " hours of " +nameOfShow+ " available to watch.");

//ALERT user to hours and minutes of show
alert(name+", there are "+minutesOfShow+ " minutes, or "+hoursOfShow+" hours, of "+nameOfShow+". What are you waiting for? Get started!");

//hummingbird randomness
var hummingbirdFlap = (60 * lengthOfShow) * 70;

//ALERT user of random hummingbird fact
alert("Before you go, " +name+"! Did you know a hummingbird flaps its wings up to 70 times a second!? That means by the time you've finished an episode, it will have potentially flapped its wings "+hummingbirdFlap+ " times! Isn't nature awesome!? Now go. Go sit and do nothing while you watch " +nameOfShow+". Don't feel guilty. You aren't a hummingbird!");