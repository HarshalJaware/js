const user = {
    username:"John",
    price:999,  
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }
}

// user.welcomeMessage();
// user.username = "ABC";
// user.welcomeMessage();

//console.log(this);  


// function one(){
//    let username = "AAA";
    // console.log(this.username);
// }

// one();

// const one  = function(){
//     let username = "AAA";
//     console.log(this.username);
// }

// one()

const one = () =>{
    let username = "AAA";
    console.log(this.username);
}

one()


const addTwo = (num1,num2)=>{
    return num1 + num2;
}


console.log(addTwo(5,6));



const addTw = (num1,num2)=> num1 + num2;

console.log(addTw(5,5));

const THREE = (num1,num2)=> (num1 + num2)

console.log(THREE(50,5));


//return object
const four = ()=> ({username:"user"})

console.log(four());


const numbers = [1,20,3,0,40,50];
numbers.forEach((num)=>{
    console.log(`${num} is greater than 10`,num >10);

})

