/********************String Methods*************************/
/*
at
charAt
charCodeAt
codePointAt
concat
constructor
endsWith
includes
indexOf
isWellFormed
lastIndexOf
length
localeCompare
match
matchAll
normalize
padEnd
padStart
repeat
replace
replaceAll
search
slice
split
startsWith
substring
toLocaleLowerCase
toLocaleUpperCase
toLowerCase
toString
toUpperCase
toWellFormed
trim
trimEnd
trimLeft
trimRight
trimStart
valueOf
Symbol(Symbol.iterator)
*/

let msg = "Hello* World";
// console.log(msg.at(6)) //output:W
// console.log(msg.at(-7)) //output:o
// console.log(msg.at(20)) //output:undefined

// console.log(msg.charAt(6)) //output:W
// console.log(msg.charAt(-6)) //output:whitespace not accept negative value
// console.log(msg.charAt(-20)) //output:whitespace


//console.log(msg.charCodeAt(0))   //output:72 UTF-16 character code
//console.log(msg.charCodeAt(-20)) //output:NAN not accept negative value


// console.log(msg.charCodeAt(5))////output:42 UTF-16 character code
// console.log(msg.charCodeAt(-5))////output:NAN not accept negative value

// let str1 = "Hello";
// let str2 = "World";

// console.log(str1.concat(" ",str2))
// console.log(concat(str1.str2))


// const a = new String("Hello world"); // a === "Hello world" is false
// const b = String("Hello world"); // b === "Hello world" is true
// a instanceof String; // is true
// b instanceof String; // is false
// typeof a; // "object"
// typeof b; // "string"

// const str1 = "Cats are the best!";

// console.log(str1.endsWith("best!"));// Expected output: true
// console.log(str1.endsWith("best", 17));// Expected output: true

// const str2 = "Is this a question?";
// console.log(str2.endsWith("question"));// Expected output: false


// const str = "To be, or not to be, that is the question.";

// console.log(str.includes("To be")); // true
// console.log(str.includes("question")); // true
// console.log(str.includes("nonexistent")); // false
// console.log(str.includes("To be", 0)); // false
// console.log(str.includes("TO BE")); // false
// console.log(str.includes("")); // true

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// const searchTerm = "dog";
// const indexOfFirst = paragraph.indexOf(searchTerm);

// console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// // Expected output: "The index of the first "dog" is 15"

// console.log(
//   `The index of the second "${searchTerm}" is ${paragraph.indexOf(
//     searchTerm,
//     indexOfFirst + 1,
//   )}`,
// );
// // Expected output: "The index of the second "dog" is 38"


// const anyString = "Brave, Brave New World";

// console.log(anyString.indexOf("Brave")); // 0
// console.log(anyString.lastIndexOf("Brave")); // 7

// const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);
// // Expected output: Array ["T", "I"]



// const regexp = /t(e)(st(\d?))/g;
// const str = "test1test2";

// const array = [...str.matchAll(regexp)];

// console.log(array[0]);
// // Expected output: Array ["test1", "e", "st1", "1"]

// console.log(array[1]);
// // Expected output: Array ["test2", "e", "st2", "2"]

// const mood = "Happy! ";

// console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "










