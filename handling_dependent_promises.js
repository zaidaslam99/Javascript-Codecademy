/*
    * The true beauty of async await is when we have a 
    series of async actions which depend on one another 
    with native promise syntax we use .then() functions 
    making sure to return correctly for each one 
*/

function nativePromiseVersion() {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return
        returnSecondPromise()
    })
    .then((secondvalue) => {
        console.log(secondvalue);
    })
} 

/*
    * So here this is something tht we already covered what 
    this is is that we get our function which has a 
    promise that needs to be resolved and we then log that 
    value what we then do is returnSecondPromise function 
    and resolve that value and its going to log that value 
    we can do the same code using async
*/


async function asyncAwaitVersion() {
    let firstValue = await returnsFirstPromise();
    console.log(firstValue);
    let secondvalue = await returnSecondPromise();
    console.log(secondvalue);
}

/*
    * The thing I like about using async and await is that 
    the code becomes more easier to read notice that we 
    created an async function and then what we did was that 
    we used await and waitied for the functions that have 
    promises to resolve and once they did all we did was 
    store that to a value and then logged the state of the 
    value the actual state and same thing goes for it on the 
    bottom
/*/