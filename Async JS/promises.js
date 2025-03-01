// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task is complete.");
//         resolve("Your promiseOne is complete.")
//     },1000)
    

// });

// promiseOne.then(function(){
//     console.log("Promise consumed.")
// })

// /***************************************** */

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2 complete.")
//         console.log("Promise 2 Task 2 complete.") 
//     },1000);
// })
// .then(function(){
//     console.log("Promise 2 is consumed")
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         const userDetails = {
//             username:"Harshal Jaware",
//             email:"user@gmail.com",
//             dob:"26 May 1993"
//         }
//         resolve(userDetails);
//     },1000);
// });

// promiseThree.then(function(user){
//     console.log(user)
// });



// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         const error = true;
//         if(!error){
//             resolve({email:"user@gmail.com",dob:"26 May 1993"})
//         }else{
//             reject("Someething went wrong!!!")
//         }
//     },1000);
// });

// const usereEmail = promiseFour.then(function(user){
//     console.log(user)
//     return user.email
// }).then(function(email){
//     console.log(email)
// }).catch(function(err){
//     console.log(err)
// }).finally(function(){
//     console.log("Your Promise is either resolve or rejected")
// })

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         const error = true;
//         if(!error){
//             resolve({username:"javascript",password:"123"})
//         }else{
//             reject("Someething went wrong in your js code!!!")
//         }
//     },1000);
// })

// async function consumedPromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     } 
// }

// consumedPromiseFive();



// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(`Error:${error}`);
//     }
    
// }
//getAllUsers();


fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)

}).finally(function(){
    console.log("All users are fetched")

})

