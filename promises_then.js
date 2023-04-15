/*
    * The inital state of async promise is pending but we 
    have to guarentee that it will settle so the logic behind 
    it is simple promises have .then it allows us to say 
    that I have an object if it settles then here is what 
    I want to happen .then() is a higherorder function 
    it takes two callback functions as args we refer to these
    callback as handlers when promise settles the approiate 
    handler will be invoked with the settled value

    * We invoke .then() with one both or neither handler 
    this allows for flexibility something else that it mentioned 
    was if the apporiate handler is not provided instead of 
    throwing an error .then will just return a promise with the 
    same settled value as the promise it was called on. 

    * Its important to understand that .then() always returns a 
    promise 
*/

const prom = new Promise((resolve, reject) => {
    resolve("Yay")
})

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
}

prom.then(handleSuccess)


/*
    * So here lets examine this code more in depth the 
    first thing that we need to know is that we are creating 
    a new Promise in it we are passing a function or the 
    better way to think of it is that what is the Promise 
    going to be doing so pass in a resolve or reject a thing 
    that you need to be aware of here is that notice that we 
    only called our resolve in our function  

    * Next what we did was that we created a function called 
    handleSuccess and what this does is that it takes in a 
    parameter and dispaly the value of the parameter now the 
    important thing to know here is that we are using our 
    obj variable and then we use .then() and what we put is 
    the function that is responsible for doing something in 
    this case it can handleSuccess
    
    * Something that I tried doing in the resolve was that 
    I passed in many different arguments such as a number a
    string and a bool and what I ended up finding was that 
    when I displayed it, it had only given 2021 as the number  
*/
