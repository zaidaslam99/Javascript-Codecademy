const prom = new Promise((resolve, reject) => {
    resolve("Yay")
});

const handleSuccess = (resolveValue) => {
    console.log(resolveValue);
}

prom.then(handleSuccess)

/* 
    * The inital state of an ansych promise is pending but we have a guarantee that it will 
    settle Promise objects come with an aptly named .then() method it allows us to say 
    "I have a promise when it settles then here what I want to happen"

    * .then() is a higher order function it takes two callbacks function as args we refer to 
    these as callback handlers when the promise settles the appropirate hadnler will be 
    invoked with the settled value 

    * The first handler sometimes called onFulfilled is a success handler and it should 
    contain the logic for the promise resolving

    * The second handler sometimes called onRejected is a failure handler and it should 
    contain the logic for promise rejecting

    * We can invoke the .then() with one both or neither handler this allows us for 
    flexibility it makes it tricky for debugging instead of throwing errors .then() 
    will just return a promise with the same settled value as the promise it was called on 
    one important feature of the .then() is that it always returns a promise 

    * So lets examine this code in more dept the first thing that we need to know is that in 
    Promise we are going topass the resolve and reject parameter the resolve is going to pass 
    in the string Yay we than create a function called handleSuccess and in it we pass a 
    function with a paramter and we then use the prom.then()

    * Now here lets look at this code more in depth the prom.then(function) we know that its 
    going to resolve and say yay we use then on our promise that we created and we talked about 
    how we can pass in a function to Promise and pass in two parameters so my thoery is this 
    that when we create the parameter value for the promise and what happens is the function 
    parameter that is wihtin our function that we created is going act as the resolve there has 
    to be some relationship there.
*/

 