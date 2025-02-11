// string Vs Array: string is immutable while array is mutable

let greeting = "Hi, good evening!";
let firstLetter = greeting[0].toLowerCase();

// tolowercase
// console.log("Lowercase text: ", greeting.toLowerCase());
// console.log("The greeting: ", greeting);
// console.log("first Letter: ", firstLetter);

// split
let splitText = greeting.split(" ");
// console.log(splitText);

// Trim
let text = "       Hey, where are you from?   "
// console.log(text, " Len: ", text.length);

let trimText = text.trim();
// console.log(trimText, " Len: ", trimText.length); 

// // reverse
let reverseSentence = "Hey bro, I'm learning Web Development";

// Reverse 1
let reverse = '';
for(let letter of reverseSentence){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);
