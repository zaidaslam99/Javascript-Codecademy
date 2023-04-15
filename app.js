function withConstructor(num) {
    return new Promise((resolve, reject) => {
        if (num === 0) {
            resolve("Zero")
        } else {
            resolve("not zero fam")
        }
    })
}

withConstructor(0).then((resolvedValue) => {
    console.log(`withConstructor(0) returned a promise with 
    which resolved to ${resolvedValue}`);
})


/*
    * Lets examine this code more in depth and the first 
    thing that we need to know is that we are creating a 
    function called withConstructor and in it we are going 
    to be passing in an argument within the function what we 
    do is that we pass in a new Promise and for it we are 
    passing two resolve values we stated if the num = 0 
    then resolve it and if the num is not equal to 0 then still 
    resolve it but each resolve is going to have its own thing 
    that is the first thing that we need to know whe it comes to 
    this code the second thing that we are going to be doing a 
    recap on here is that we are passing in the .then and we 
    are passing in a parameter value to an anonymous function
    the question that I have is how do async functions work 
    with regular functions first and foremost but the thing 
    that I do know is that we are passing .then into the 
    function that we created with a value and what this does is
    that .then works with resolve and .catch works with reject 

*/

async function withAsync(num) {
    if (num === 0) {
        return "zero"
    } else {
        return "not zero"
    }
}

withAsync(100).then((resolvedValue) => {
    console.log(`withAsync(100) returned a promise with 
    which resolved to ${resolvedValue}`);
})


/*
    * Now this code is doing the same thing as the code 
    on the top here whats happening is that we are using 
    async and then creating the function with a parameter 
    value we have simple if and else and we say that either 
    return zero or not zero and we run the same .then and 
    it results to the else statement we didnt have to use 
    resolve or reject or put in any promises all we did was 
    use the asnyc keyword
*/