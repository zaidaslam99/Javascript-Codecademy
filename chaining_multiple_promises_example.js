import { checkInventory, processPayment, shipOrder } 
from "./library.mjs";

const order = {
    items: [["sunglasses", 1], ["bags", 2]],
    giftCardBalance: 79.82
}

checkInventory((order).then((resolvedValueArray) => {
    return processPayment(resolvedValueArray)
}).then((resolvedValueArray) => {
    return shipOrder(resolvedValueArray)
}).then((successMessage) => {
    console.log(successMessage);
})).catch((errorMessage) => {
    console.log(errorMessage);
});

/*
    * So here lets examine this code first thing that we did was we 
    passed in the object to the function we created and we than ran the 
    .then its important to understand why we are using .then because we 
    are working with promises and promises have a resolve and reject value 
    so we can pass in recirporacting functions for each resolve and 
    reject value now here we run .then on the function with which is either 
    going to resolve or reject it based on true or not 

    * the next thing that is happening here is that we are using .then 
    and what this is going to do is that we pass in a function with 
    a parmeter value and that parameter value we than pass into another 
    function we than use .then again do the same thing where we pass in the 
    resolved value to .then again and return that parameter value to 
    another function then we use .then again and log the successmessage 
    and lastly for the catch we display an error message 
*/