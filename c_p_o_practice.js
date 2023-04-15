const inventory = {
    sunglasses: 100,
    pants: 1088,
    bags: 1344
};

const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve("Sunglasses order processed")
    } else {
        reject("That item is sold out")
    }
}

const orderSunglasses = () => {
    return new Promise(myExecutor)
}

const orderPromise = orderSunglasses()

console.log(orderPromise); 

/*
    * Lets examin what is going on in this code the first thing that we need to know is that we are 
    going to be creating an inventory object and then its going to be having its key and values the 
    second thing that we need to know is that we are going to create an executor function in it we are 
    going to be passing in a resolve and reject parameter and the function opens the second thing that 
    we need to know is that our condidion has an if block so if the inventory.sunglasses is greater 
    than 0 than we are going to run the resolve() else we are going to be running reject and then a 
    message so my thing is that its going to be a parameter value here the next thing that we need 
    to know is the definition here...

    * A callback used to initialize the promise. This callback is passed two arguments: 
    a resolve callback used to resolve the promise with a value or the result of another promise, 
    and a reject callback used to reject the promise with a provided reason or error.   

    * So lets examine this code a little more in depth the first thing that we learned here is this 
    that we are working with different blocks of codes notice that we created the functon and we are 
    going to be running different blocks of the function now what does this mean its really simple 
    to understand if we pass in the function that we created to the Promise and then passed in our 
    function now when it comes to name of the variables so what I learned was that its either resolve 
    or reject and what we do is that we get things done either or I tried creating another variable to
    see if that would affect the code and have it run elsewise rather that was not the case it said 
    the new parameter that I created was not a function so when we pass in the myExecutor function into 
    our Promise its going to take it one of two ways either resolve or reject and the most important 
    thing to know here is this that its going to be displaying everything in an object 

    Displays this...
    _________________________________________

    Promise { 'Sunglasses order processed' }

*/