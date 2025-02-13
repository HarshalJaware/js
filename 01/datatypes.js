"use strict"; //treat all js code as newer version

//alert(3 + 3); //this is not allowed here because we are using node
//if we writen this in window console its works because browser contains js engine


//List of DataTypes
//1.String =>"ABC" or 'ABC'
//2.Number => 123
//3.Boolean =>True/False
//4.Null =>Standalone Value
//5.Undefined => eg.let abc; abc is declared but not assigned.
//6.symbol =>Uniquness uses mostlly in react to find unique component
//7.object => overall js is depend on object
//8.bigint =>mostlly uses for stock market 

let name = "John";  
let age = 30;//number

console.log(typeof name);//string
console.log(typeof age);//number
console.log(typeof null); //op is object //some people its called as language drawback or error
console.log(typeof undefined) //op is undefined