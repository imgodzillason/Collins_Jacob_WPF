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

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = false;

//if price of phone is less than our budget and if our paycheck is over 300
if(iPhonePrice < budget ||wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}