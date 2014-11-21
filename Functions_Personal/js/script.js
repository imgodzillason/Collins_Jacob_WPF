/*
Jacob Collins
WPF- Section 1
11/20/14
Functions_Personal
 */

//set up variable requesting square feet


var finalPrice = function (squareFeet, amount, budget){//set up anonymous function to calculate total cost of tile
    var squareFeet = prompt("How many square feet is the room?");
    while((isNaN(squareFeet) || squareFeet === "")){ //check to make sure number is entered
        squareFeet = prompt("Please enter a number."); //advise user to enter number
    }

    console.log("The room is "+squareFeet+ " square feet."); //print out number of square feet

//set up variable requesting amount of tile
    var amount = prompt("How much is the tile you want to purchase per square foot?");
    while((isNaN(amount) || amount ==="")){//check to make sure number is entered
        amount = prompt("Please enter a number");//advise user to enter number
    }

    console.log("The amount you entered for your tile is $" +amount+ ".");//print out amount of tile

//set up variable requesting budget to purchase tile
    var budget = prompt("How much have you budgeted to spend on tile?");
    while ((isNaN(budget) || budget ==="")){//check to make sure number is entered
        budget = prompt("Please enter an amount.");//advise user to enter number
    }

    console.log("You have allotted $" +budget+ " to spend on tile.");//print out amount budgeted
    totalCost = Math.round(squareFeet * amount);//calculate total cost of tile and round to nearest dollar
    console.log("The total amount of the tile will be $" + totalCost+ ".");//print out total cost of tile
    var canAfford = (totalCost <= budget) ? console.log("You can afford to purchase the tile!") : console.log("You cannot afford to purchase the tile.");//set up ternary to determine if user can afford to purchase tile
    return totalCost;//return amount of total cost
};

finalPrice();//call function to print out total cost

//var canAfford = (totalCost <= budget) ? console.log("You can afford to purchase the tile!") : console.log("You cannot afford to purchase the tile.");