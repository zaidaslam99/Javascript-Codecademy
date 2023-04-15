let stocks = {
    Fruits: ["strawberry", "grapes", "apples", "bannas"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["vanilla", "none"]
};

let is_shop_open = true;

async function order() {
    try{
        await abc
    }
    catch(error){
        console.log("This error doesnt exist", error);
    }
    finally{
        console.log("runs code anyways");
    }
}

/*
    * So here lets examine what is going on the first thing that we need to know 
    is this that in the other code that we wrote when it comes to working with 
    functions we used try catch and finally as well now here look at the syntax 
    where the await is going to be reference to the function the catch is going 
    to refer to error in case there are errors and finally is going to work in 
    the same way so its important to understand that when we do things this 
    way things make sense and it follows the same logic even when it comes to 
    working with asnyc functions its important to understand that we are working 
    promises.
*/

order().then(()=>{console.log("yooo");})

/*
    * So here its important to understand that we can use .then() 
    outside to even outside our async function 
*/