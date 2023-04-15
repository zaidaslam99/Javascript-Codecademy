async function waiting() {
    const firstValue = await firstAsyncThing();
    const secondValue = await secondAsyncThing();
    console.log(firstValue, secondValue);
}

async function concurrent() {
    const firstPromise = firstAsyncThing();
    const secondPromise = secondAsyncThing();
    console.log(await firstPromise, await secondPromise);
}

/*
    * So lets examine what is going on first we are creating 
    a function called waiting and then inside the function 
    we are passing in a variable all we do is run the await 
    and the function name and in the second variable we are 
    doing the same thing we are passing in await to the 
    second function and we are logging the value notice 
    the ideaology here we are waiting for the functions to 
    output result then we log 

    * The second function notice we are doing the same thing 
    but instead of running await while we log it my theory here 
    is simple doing this lets us get the results faster 
    rather than waiting its like functions created and boom 
    then we are almost running them while we display the 
    value

    * in the waiting() function we pause our function 
    until the first promise resolves then we construct 
    the second promise once that resolves we print both 
    resolved value to the console

    * in our concurrent function both promises are constructed 
    without using await then use await each of their 
    resolutions to print them to the console. SO its important 
    to know that you can run these promises at once.
*/