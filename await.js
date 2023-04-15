import brainstormDinner from "./fakefile.js";

function nativePromiseDinner() {
    brainstormDinner().then((meal) => {
      console.log(`I'am going to be making ${meal}
      for dinner`);  
    })
}

nativePromiseDinner()

/*
    * So here lets examine what is going on now keep 
    in mind we dont have the source code file so its 
    hard to gauge what is happening but its important to 
    understand we are learning the await concept so we are 
    going to make an inference we create a function and in the 
    function we are passing .then we know that .then works 
    with resolve so then we pass in an anonymous function and
    in that function we pass in the parameter with the 
    anonymous function alot of this is something that we 
    have been doing.
*/

async function announceDinner() {
    const meal = await brainstormDinner()
    console.log(`I am going to be making ${meal}
    for dinner`);
}

announceDinner()


/*
    * So here lets examine this what makes this code
    different from the other my theory is this that since 
    we are using async we dont need to involve promises 
    and that being that we dont need to pass in resolve 
    or reject to that promise so when we create this 
    function we pass in an await and what this is doing 
    is my theroy that its waiting for this function 
    to execture and once it does it returns a value into 
    meal and then that gets passed to the log statement
*/