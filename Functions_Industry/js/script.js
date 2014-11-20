/*Jacob Collins
WPF- Section 1
11/20/14
Functions_Industry
*/
//set up variable for pixel width
var pixelWidth = prompt("What is the width (in pixels) that your website will be contained within?");
while(isNaN(pixelWidth) || pixelWidth ===""){//make sure number is entered
    pixelWidth = prompt("Please enter a number");//ask user to enter number if one is not entered
}

console.log("The width of your website is " + pixelWidth + " pixels.");//print out number of pixels entered

var goldenRatio = prompt("Did you want to use the Golden Ratio in constructing your site?");//ask user if they want to use Golden Ratio
if(goldenRatio ==="N" || goldenRatio ==="n"){//if user does not want to
    var columns = prompt("How many columns would you like the site to contain?");//ask user for number of columns
    while(isNaN(columns) || columns ===""){//check to make sure number is entered
        columns = prompt("Please enter a number");//request number if not originally entered
    }
    var evenColumns = Math.round(pixelWidth / columns);//find number of columns and round to nearest whole number
    console.log("Each column should be approximately " +evenColumns+ " pixels in length.");//print answer to console
}else{
    alert("We will now divide your pixel width to align with the Golden Ratio.");//if the user does want to use it
    var largerColumn = Math.round(pixelWidth / 1.618);//divide total width by 1.618 to get larger column
    var smallerColumn = pixelWidth - largerColumn;//subtract larger column by total width to get the smaller column
    console.log("The larger column should be "+largerColumn+ " pixels and the smaller column should be " +smallerColumn+ " pixels.");//print out length of large and small column
}