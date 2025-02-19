function test(){
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
    console.log("E")
}

test(); //function call

function add(num1,num2){
   console.log(num1 + num2);
}
   
add(5);


function add(num1,num2){
    return num1 + num2;
 }

 let res = add(5,5);
 console.log(res);


 function login(username){
    return `${username} just logged in`;
 }

 console.log(login("harshal"));

//num1 is parameter 

 function calculateCratPrice(...num1){   ///rest operator  and spread operator are same based on uses changes in name
    return num1;
 }

 console.log(calculateCratPrice(100,200,300,400));   //arguments 100,200,300...
 

 //handling object in function
 const user = {
    username:"Gannny",
    price:199
 }

 function handleObj(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
 }

 handleObj(user )



 handleObj({
    username:"ppp",
    price:399
 })


 const arr = [100,200,300,400];
 function arrManipulaion(arr){
    return arr[1]
 }

 console.log(arrManipulaion(arr));
 console.log(arrManipulaion([10,2,0,30,5,54]));

 