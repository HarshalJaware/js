//Immediatelly invoked function Expression

//syntax:

// (function(){
//     console.log("This is IIFE");
// })();

// (function(){
//     var name = "John";
//     console.log(name); // John
// })();


//arrow function

// (()=>{
//     var name = "John Doe";
//     console.log(name); // John
// })();

// console.log(name);



//poluting global scope example name is accessible outside from scope where declarion
if(true){
    var name = "John Doe";
    console.log(`inner ${name}`);
}

console.log(`outer ${name}`);




