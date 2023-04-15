async function asyncFuncExample() {
    let resolvedValue = await myPromise();
    console.log(resolvedValue);
}

asyncFuncExample()

/*
    * This code will not run but there is something that 
    you need to know here and that being within our async 
    function asyncFuncExample() we use await to halt our 
    exexution until myPromise() is resolved and assigned 
    its resolved value to a variable resolvedValue. Then we 
    log resolvedValue to the console we are able to handle 
    logic in a way that feels like sync programming

    * The async keyword is used with await it retunrs the 
    resolved value of a promise since promises resolve in 
    an indeterminate amount of time await halts or pauses 
    the execution of our async functions until a given 
    promise is resolved


*/