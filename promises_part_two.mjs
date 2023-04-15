import { checkInventory } from "./library.mjs";

const order = [["sunglasses", 1],["bags", 2]];

/*
    * if every item in the order is in stock that promise 
    resolves with the value "Thank you your order was successful"
    otherwise the promise rejects with the value "Were" sorry 
    your order could not be completed because some items are 
    sold out
*/

const handleSuccess = (res) => {
    console.log(res);
}

const handleFailure = (rej) => {
    console.log(rej);
}

checkInventory(order).then(handleSuccess, 
    handleFailure)

    /*
    * So we were able to solve what the problem was 
    we were using the export default here and what this 
    did was that it was giving us an error now here is 
    what is happening we are creating an order array and 
    its going to have two arrays within arrays what we than 
    do is this we create two hanndler functions and they 
    both are going to be doing something 

    * The next thing that we do is that we pass in order 
    intro checkInventory function what this is going to 
    do is simple this function note that we already defined 
    a promise and in it we are going to create a callback
    function setTimeout and within that callback function we 
    pass in the logic where the roder which stands for 
*/