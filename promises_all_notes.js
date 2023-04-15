import { checkAvailability } from "./library.mjs";

const onFulfill = (itemsArray) => {
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the 
    disrubtor placing order now`);
};

const onReject = (rejectionReason) => {
    console.log(rejectionReason);
};

const checkSunglasses = checkSunglasses
("sunglasses", "Supply CO")

const checkPants = checkAvailability
("pants", "Supply CO")

const checkBags = checkAvailability
("bags", "Supply CO")

Promise.all([checkSunglasses, checkPants, checkBags])
.then(onFulfill)
.catch(onReject)


/*
    * SO here there was something that I wanted to mention 
    and that being when we created an array we didnt run the 
    function there are two terms to understand when it comes 
    to working with functions and thats pass a function 
    and calling a function passing a function means function
    and calling a function means function() with the constructor 
    when we pass in a function with () what this means is that 
    we want the out putof the function and when we dont we are 
    using it as a reference value like how we do when we use 
    callback that is our reference value and doing callback()
    this means hey run this thing now

    * Here notice what we did we created three function and 
    in them we passed a parameter value for each function and 
    what we did was that we passed the parameter value the two 
    functions that we created on the top what we did was that we
    passed two parameter value and what these two functions did 
    was that it just gave a message so we are going to be using 
    these as call 
*/