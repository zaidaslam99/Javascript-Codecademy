/*
    * So now we are going to be talking about handling 
    errors so when .catch() is used with long promise chain 
    there is no indication of where in the chain the error 
    was thrown this can make debugging harder 

    * with async and await we use try... catch statements 
    for error handling by using this syntax not only are 
    we able to handle errors in the same way we do async 
    code but we can also catch both sync and async errors 

*/

async function usingTryCatch() {
    try {
        let resolvedValue = await 
        asyncFunction("thing that will fail");
        let secondValue = await 
        secondAsyncFunction(resolvedValue)
    } catch (error) {
        console.log(error);
    }
}


/*
    * So here since we learned about thenables and 
    when it comes to catch when we work with promises 
    we than learn what works with async functions and 
    its simple really in first line we craeted an 
    async function and in it we passed a try and catch 
    all we did was await for the funtion to return a 
    value and in the second what we did was that we 
    passed the resolved value into the second function 
    but say if the value is to be rejected than what do 
    we do when it comes to async function and its simple 
    thats when the catch comes in and it gives us an error 
    parameter where we pass in log the error or whichever 
    is the error in the reject

    * Since async functions return promises we can still 
    use native promises .catch() with an async function

    * notice what we did in the second line where we 
    are doing the same thing async function and it called
    usingPromiseCatch() and in the function we await for 
    the asunc function to run either a resolve or rejected 
    value and what we do then is we can even use catch on 
    async function so here is use catch on the rejectedPromise
    and then its going to log the rejected value that is 
    something to be considerate about here
*/

async function usingPromiseCatch() {
    let resolvedValue = await
    asyncFunction('thing will fail')
}

let rejectedPromise = usingPromiseCatch();

rejectedPromise.catch((rejectedValue) => {
    console.log(rejectedValue);
})