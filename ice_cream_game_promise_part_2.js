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


order(2000, ()=> console.log(`${stocks.Fruits[0]} was selected`))

.then(() => {
    return order(0000, ()=>{console.log("Production has started")})
})

/*
    * So here lets examine what is going on overall the code is simple 
    compared to the other code that we wrote however there is something 
    that we need to know here what we we did in the first was that we passed 
    the time and a function that function is then used as function something 
    else that I learned was that when we use callback we do something 
    like function(dowork) and in the function we do work() for it to be a 
    callback function means we are not running the result of the function 
    we are running the function as it is the next thing that we need to 
    know is that when it comes to callback functions we can pass in anonymous 
    functions it dont always have to be declared functions 

    * now lets talk about .then() in it we are passing in an anonymous function 
    and within the function we have to use return (apparentely you have to use 
    return otherwise its not going to work) and in that .then all we are doing 
    is passing the function again and the time and then what needs to be done 
    compare this to the callback its so much more easier to read as suppose 
    of nesting multiple callbacks so after the frist function its going to 
    be .then and we are going to be doing so on and so forth.
*/