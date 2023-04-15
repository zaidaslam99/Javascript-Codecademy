let stocks = {
    Fruits: ["strawberry", "grapes", "apples", "bannas"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["vanilla", "none"]
}

let order = (fruit_name, call_prod) => {
    
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
    }, 2000);

    call_prod()
};

let production = () => {

    setTimeout(() => {
        console.log("Production has started");
    }, 0000);
}

// the second parameter is a callback function
order(0, production)


/*
    * So here lets examine what is going on the first thing that we need to 
    know is that we are making an object called stocks and in it we are passing 
    a key and value the value being an array of elements here we are demonstrating 
    our knowedlge of using callbacks the first thing that we are doing is that 
    we are creating a function that is taking in two parameters 
    its important to understand that the second parameter is going to be using 
    callback function the first thing that we do is use a SetTimeout and in it we 
    are passing basically the object then key then the index and doing so what 
    happens is we can access parts of an element using index notation the second 
    thing that we are going to be doing is this that we are going to be creating 
    another function and inside we are going to be passing a setTimeout function 
    which is going to be taking in an anonymous function and log something but 
    it shows how we are developing a relationship between functions using callback
*/