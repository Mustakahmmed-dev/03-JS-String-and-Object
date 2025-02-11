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

// Reverse 1: using for of loop
let reverse = '';
for(const letter of reverseSentence){
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);

// Reverse 2: using for loop and index
let rev = '';
for(let i = 0; i < reverseSentence.length; i++ ){
    // console.log(i);
    // console.log(i, " : ", reverseSentence[i]);
    let letter = reverseSentence[i];
    rev = letter + rev;
}
// console.log(rev);

// Reverse 3: using reverse
let reversed = reverseSentence.split('').reverse();
console.log(reversed);