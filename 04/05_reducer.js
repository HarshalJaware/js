const cartItems = [
    {
        item:"Item1",
        price:999
    },
    {
        item:"Item2",
        price:1999
    },
    {
        item:"Item3",
        price:2999
    },
    {
        item:"Item3",
        price:3999
    },
    ];
    
    
    const cartTotal = cartItems.reduce((acc,currentVal)=>{
        return acc+ currentVal.price;
    },0);
    
    console.log(cartTotal)