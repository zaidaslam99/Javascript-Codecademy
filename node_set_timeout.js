const returnedPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I resolved")
        }, 1000);  
    })
}

const prom = returnedPromiseFunction();
console.log(prom);

/*
    * So lets examine this code more in depth here 
    the first thing that we need to know is this that we are 
    creating a function in that function what we are doing is 
    we are passing in a Promise now the thing that we 
    need to know about Promise is that we can pass functions 
    into them so we pass in an anyonmous function and in 
    it we pass two arguments that are resolve and reject 
    something else worth mentioning was that in the other 
    code that we did we passed in a function to our promise 
    but in the function we already created the resolve and 
    reject parameter and here in the anonymous function we 
    are creating the reject and resolve parameter so it shows 
    us that we can create these parameter in either the function
    or in the anonymous function so in our anonymous function 
    we passed in a setTimeout function in it we passed resolve 
    and a time 

    * Now here we need to know that its going to be saying 
    <pending the reason being that since we are working with 
    an API we are waiting for the code to send back the data 
    that is something that you need to know thats why when 
    the code runs it finishes and data dont show up
*/ 