/*
 Jacob Collins
 WPF Section 01
 Expressions_Personal
 11/5/2014
 */

/*alert("test");*/

//Ask user their name
var name = prompt("What is your name?");

//ALERT user
alert("Hello "+name+", we're going to determine the number of hours you will have to work to purchase different gaming consoles. If you have a coupon, we will ask for it at the end.");

//console.log output
console.log(name+ " is the name of the user.");

//Adding in arrays
var gamingConsoles = ["Xbox One", "Playstation 4", "Wii U"];

//adding values for gamingConsoles
gamingConsoles [0] = 349.99;
gamingConsoles [1] = 399.99;
gamingConsoles [2] = 299.99;

//Requesting information on hourly rate

var payPerHour = prompt("How much do you make per hour?");

//console.log output for payPerHour
console.log(name+ " makes $"+payPerHour+ " per hour");

//Determining hours
var xboxOneHours = gamingConsoles [0] / payPerHour;
var playstationHours = gamingConsoles [1] / payPerHour;
var wiiUHours = gamingConsoles [2] / payPerHour;

//console.log output for number of hours needed to work
console.log(name+ " needs to work "+xboxOneHours+" hours to earn enough for an Xbox One.");
console.log(name+ " needs to work "+playstationHours+" hours to earn enough for a Playstation 4.");
console.log(name+ " needs to work "+wiiUHours+" hours to earn enough for a Wii U.");

//ALERT user of number of hours
alert(name+ ", you will need to work " +xboxOneHours+ " hours to earn enough for an Xbox One.  You will need to work " +playstationHours+ " hours to earn enough for a Playstation 4. You will need to work " +wiiUHours+ " hours to earn enough for a Wii U.");


//Ask user how many hours per day they work
var hoursPerDay = prompt("How many hours per day do you work?");

//console.log for hours per day worked
console.log(name+ " works " +hoursPerDay+ " hours per day.");

//Determining number of days needed to work
var numberOfDaysXbox = xboxOneHours / hoursPerDay;
var numberOfDaysPlaystation = playstationHours / hoursPerDay;
var numberOfDaysWiiU = wiiUHours / hoursPerDay;

//console.log output for number of days needed based on hours
console.log(name+ " needs to work " +numberOfDaysXbox+ " days to earn an Xbox One.");
console.log(name+ " needs to work " +numberOfDaysPlaystation+ " days to earn a Playstation 4.");
console.log (name+ "needs to work " +numberOfDaysWiiU+ " days to earn a Wii U.");

//ALERT user for number of days

alert(name+", you will need to work "+numberOfDaysXbox+" days to earn an Xbox One. You will need to work " +numberOfDaysPlaystation+ " days to earn a Playstation 4. You will need to work " +numberOfDaysWiiU+" days to earn a Wii U.");

//Ask user how amount of coupon

var couponAmount = prompt("How much does your coupon reduce the cost of the console? If you do not have one, enter 0.");

//console.log output for couponAmount
console.log(name+" has a coupon for $" +couponAmount+".");