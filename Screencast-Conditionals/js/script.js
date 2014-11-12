//Conditional Logic
/*
var kidHeight = 46;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with parent

//if the child is old enough, print to the console "you can ride"
//if the kid is over 48 inches in height
if (kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
} else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
} else{
    //code performed if condition is false
    console.log("Sorry kid, you've got some growing to do first!");
}
*/
/*
var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = false;

//if price of phone is less than our budget and if our paycheck is over 300
if(iPhonePrice < budget ||wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}
    */
var gpa = 48;

//if the gpa is over the min 2.0 score the student can graduate
/*if(gpa > 2.0){
    console.log("You can graduate!");
}else{
    console.log("GPA is too low!");
}*/

/*(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");*/

var age = 6;
var book;

//If the child is under 1-, they get Green Eggs and Ham, otherwise they get The Time Machine
/*if(age <10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}
console.log(book);*/

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);