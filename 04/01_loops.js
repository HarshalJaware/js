const map1 = new Map();

map1.set("IN","India");
map1.set("USA","United States Of America");
map1.set("FR","France");
map1.set("IN","India");


console.log(map1)

for(let iterator of map1){
    console.log(iterator)
}

for(let [key,value] of map1){
    console.log(key)
    console.log(value)
}

    console.log("========================================")

const games = {
    game1:"Game1",
    game2:"Game2",
    game3:"Game3",
    game4:"Game4",
}


// for(let iterator of games){
//     console.log(iterator)//Reference Error:games is not iterable
// }


for(let iterator in games){
    console.log(iterator)//iterator returns keys of object
}

for(let iterator in games){
    console.log(games[iterator])//returns values
}


