//singleton object 
const obj1 = new Object();
console.log(obj1);

//non-singleton object
const obj2 = {};
console.log(obj2);

obj1.id = "Abc123";
obj1.name = "John";
obj1.location = "Dubai";
obj1.address = {
    primary:"ABC road",
    city:"Bankok",
    country:"UK"
}

console.log(obj1.address['country']);



const person = new Object();
person.id = "001";
person.fname = "Jony";
person.lname = "Minda";
person.fullName = function() {
    return `${this.fname} ${this.lname}`;
};


console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person.hasOwnProperty('fname11'));




//object destructuring

const {fname} = person;
console.log(fname);
