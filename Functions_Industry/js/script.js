/*Jacob Collins
WPF- Section 1
11/20/14
Functions_Industry
*/

var pixelWidth = prompt("What is the width (in pixels) that your website will be contained within?");
while(isNaN(pixelWidth) || pixelWidth ===""){
    pixelWidth = prompt("Please enter a number");
}

console.log("The width of your website is " + pixelWidth + " pixels.");

var goldenRatio = prompt("Did you want to use the Golden Ratio in constructing your site?");
if(goldenRatio ==="N" || goldenRatio ==="n"){
    var columns = prompt("How many columns would you like the site to contain?");
    while(isNaN(columns) || columns ===""){
        columns = prompt("Please enter a number");
    }
    var evenColumns = Math.round(pixelWidth / columns);
    console.log("Each column should be approximately " +evenColumns+ " pixels in length.");
}else{
    alert("We will now divide your pixel width to align with the Golden Ratio.")
    var largerColumn = Math.round(pixelWidth / 1.618);
    var smallerColumn = pixelWidth - largerColumn;
    console.log("The larger column should be "+largerColumn+ " pixels and the smaller column should be " +smallerColumn+ " pixels.")
}