const skills = ["JS","Java","React","Node"];

skills.forEach(function(item){
    console.log(item);
});

console.log("===============================");

skills.forEach((item)=>{
    console.log(item);
})

console.log("===============================");
skills.map((item)=>{
    console.log(item);
})

console.log("==============printMe=================");

function printMe(item){
    console.log(item);
}

skills.forEach(printMe)


console.log("=============*****==================");

skills.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


console.log("**********************************************");

const lang = [
    {
        langName:"JavaScript",
        langCode:"js"
    },
    {
        langName:"Java",
        langCode:"java"
    },
    {
        langName:"Python",
        langCode:"py"
    },
    {
        langName:"Swift",
        langCode:"sw"
    },
    {
        langName:"Ruby On Rails",
        langCode:"rb"
    }
    ];

    
    lang.forEach((item,index,data)=>{
        console.log(index,item.langName,data[index]);
    });