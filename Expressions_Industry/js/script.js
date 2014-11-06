/*
Jacob Collins
WPF Section 01
Expressions
11/5/2014
 */

//Create js file that will tell us number of words and images per web page on web site

//Ask the user their name
var name = prompt("What is your name?");

//ALERT user
alert("Hello "+name+", we'll be asking you about your website needs.");

//Ask user number of words and images required for website
//Create a variable to catch their answer
var numberOfWords = prompt("How many words does your website require?");
var numberOfImages = prompt("How many images does your website require?");

//Ask user how many pages the website requires
var numberOfPages = prompt("How many pages does your website require?");

//Console.log out the response
console.log("Number of words input equals " +numberOfWords);
console.log("Number of images input equals " +numberOfImages);
console.log("Number of pages input equals " +numberOfPages);

//Number of words and images divided by number of pages
var wordsPerPage = numberOfWords / numberOfPages;
var imagesPerPage = numberOfImages / numberOfPages;

//ALERT user of number of words and images per page
alert (name+ ", your website will require "+wordsPerPage+ " words per page and "+imagesPerPage+ " images per page.");

//Console.log output for the numbers for words and images
console.log("Number of words per page equals " +wordsPerPage);
console.log ("Number of images per page quals" +imagesPerPage);