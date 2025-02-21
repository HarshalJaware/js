const arr = ["Js","Java","Swift","Python",".Net","Php"];

const val =  arr.forEach((item)=>{
   console.log(item); 
   return item;
});
console.log(val); 
   
   
const resp = arr.filter((item)=>{
    return item.length > 3;
})
console.log(resp)

console.log("===========================")

const newArr = [];
arr.forEach((item)=>{
    if(item.length > 3){
        newArr.push(item)
    }
});
console.log(newArr)




const books = [
    {title:"Book One", genre:"Math",published:1981,edition:2025},
    {title:"Book Two", genre:"History",published:1983,edition:2025},
    {title:"Book Three", genre:"English",published:1985,edition:2025},
    {title:"Book Four", genre:"English",published:1986,edition:2025},
    {title:"Book Five", genre:"Geography",published:1988,edition:2025},
    {title:"Book Six", genre:"History",published:1981,edition:2025},
    {title:"Book Seven", genre:"Geography",published:1989,edition:2025},
    {title:"Book Eight", genre:"Geography",published:1990,edition:2025},
    {title:"Book Nine", genre:"Math",published:1985,edition:2025},
    {title:"Book Ten", genre:"History",published:1980,edition:2025},
    ];
    
    
    
    let userBooks = books.filter((bk)=>bk.genre === "History")
    
    userBooks = books.filter((bk)=>{
        return bk.published >= 1982 && bk.genre === 'Geography'
    });
    
    console.log(userBooks)




