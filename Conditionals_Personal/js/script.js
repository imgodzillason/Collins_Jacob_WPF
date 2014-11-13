/*
Jacob Collins
WPF Section 01
Conditionals Personal
11/12/14
 */

//obtain values for caloric intake for breakfast
var breakfast = prompt("How many calories did you have for breakfast?");

//make sure values aren't empty
if(breakfast == ""){
    //alert user they forgot to input a number
    alert("You forgot to input a number.");
    prompt("How many calories did you have for breakfast?");
}else{
    //print to console
    console.log("You had "+breakfast+ " calories at breakfast.");
    alert("We will now ask for your lunch calories.");
}

//obtain values for caloric intake for lunch
var lunch = prompt("How many calories did you have for lunch?");

//make sure values aren't empty
if(lunch == ""){
    //alert user they forgot to input a number
    alert("You forgot to input a number.");
    prompt("How many calories did you have for lunch?");
}else{
    //print to console
    console.log("You had "+lunch+ " calories at lunch.");
    alert("We will now ask for your dinner calories.");
}

//obtain values for caloric intake at dinner
var dinner= prompt("How many calories did you have at dinner?");

//make sure values aren't empty
if(dinner == ""){
    //alert user they forgot to input a number
    alert("You forgot to input a number.");
    prompt("How many calories did you have at dinner?");
}else{
    //print to console
    console.log("You had "+dinner+ " calories at dinner.");
}

/*
//var for total number of calories for the day
var totalCalories = (breakfast + lunch + dinner);
//determine
if (totalCalories < 1500){
    //print to console
    console.log("You had "+totalCalories+ " calories today. Have some dessert!");
}else{
    //print to console
    console.log("You had "+totalCalories+ " calories today. No dessert for you!");
}
*/
//create totalCalories var and parse variables into numbers
var totalCalories = (+breakfast) + (+lunch) + (+dinner);

//Add ternary result
var dessert = ((totalCalories <= 1500) ? console.log("You had " +totalCalories+ " calories today. Have some dessert!") : console.log("You had " +totalCalories+ " calories today. No dessert for you!"));
