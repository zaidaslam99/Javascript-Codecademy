let stocks = {
    Fruits: ["strawberry", "grapes", "apples", "bannas"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["vanilla", "none"]
};

let is_shop_open = true;

let order = (time, work) => {
    
    return new Promise((resolve, reject) => {
        
        if (is_shop_open) {
    
            setTimeout(() => {
    
                resolve( work() )                
    
            }, time);

        } else {
    
            reject(console.log("Our shop is closed"))
        }   
    })
}

order(2000, ()=>console.log(stocks.Fruits[0]))

/*
    * So lets examine what is going on in this code so earlier we had talked 
    about callbacks and how we can use them this function we are using callbacks 
    that is the first thing to understand the second thing that we need to 
    understand here is this firsst we are creating a boolean varaible and this is 
    going to be set as true the next thing that we do here is we create a function 
    called order and in it we are passing time and work parameters within our 
    function we are passing a new Promise and in it we are passing resolve and 
    reject if true we are running setTimeout and within our resolve we are passing 
    in the work() function its important to undertsand that work is a callback 
    function and time is a parameter value now what this means is that when we 
    pass in a function to work and the time for time when we call our function order 
    we can pass in the time and then the function that is going to be doing something 
    here its simportant to understand that we can use async functions and they can do 
    something here in this case its going to be getting the item from the array from 
    the object.


*/