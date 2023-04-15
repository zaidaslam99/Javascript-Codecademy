const returnPromiseFuntion = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("I resolved!")}, 1000);
    });
}

const prom = returnPromiseFuntion()

console.log(prom);

/* 
    * So here we created a function and in it we passed a return statement called 
    new Promise in it we had passed resolve and reject and then what we did was 
    that we called the setTimeout and in it passed an anonymous function along with the 
    time.

    * The first thing is what makes this code different from the other code that we had 
    written and the answer to that is really simple what we are doing is that we are 
    making a function called returnPromiseFunction and in it we are passing a new promise 
    which we have a resolve  and reject and in the other code what we did was that we had 
    created a function and in that function we than passed to the promise here the thing 
    that we need to know is that we can pass resolve and reject in the promise and the reason 
    why we are doing this is that we are saying that hey in our promise we can pass a function 
    and here we are passing a function with two parameter and then ontop of that we pass the 
    setTimeout api and use the parameter value in our function and the time this will display 
    pending

    * Something else that we need to know when it comes to this code is that when making promises 
    what we are going to do is use new Promise
*/

