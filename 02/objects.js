const mySym = Symbol("key1");

const obj1 = {
    id:123,
    name:"John",
    "full name":"John Doe",
    [mySym]:"My Symbol",
    location:"Pune",
    email:"user@gmail.com",
    skills:["JS","React","Node"]
};
console.log(typeof obj1)
console.log(obj1.name)  //"John"

console.log(obj1["full name"])

console.log(obj1[mySym]);

console.log(obj1)


obj1.greetings = function(){
    console.log("Hello User");
}
obj1.greetings2 = function(){
    console.log(`Hello ${this.name}`);
}

obj1.greetings()
obj1.greetings2()
