/*
    * We have seen that the await keyword halts the 
    execution of an async function until a promise 
    is no longer pending dont forget the await keyword 
    it may seem obivious because our function will still 
    run it just wont have the desired results 
*/

let myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Yay I resolved")
        }, 1000);
    })
};

async function noAwait() {
    let value = myPromise();
    console.log(value);
}

async function yesAwait() {
    let value = await myPromise();
    console.log(value);
}

noAwait()
yesAwait()

/*
    * SO here lets look at this code the first thing that 
    we need to know is that we are creating a Promise 
    and in it we are passing a return new Promise 
    with a resolve and reject and what we did was that 
    we called a setTimeout and in it we passed resolve 
    only now if we were using thenables it would be with 
    our resolve and reject would be catch its important 
    to understand that resolve is going to run after 1 
    second 

    * The next thing that we need to know is this that we 
    created an async function called noAwait and in it 
    notice how we declared a varaible and set it equal to 
    when the function runs so the return value of the function 
    and all we are doing is that we are going to be logging 
    the value 

    * what makes this code different from the code that you 
    see above here is that we run the same async function 
    this time we are using the await (meaning same concept)
    this time what we did was that we waited for the promise to
    execute and then logged the value 

    * SO in summary when using await what it does is that it 
    waits for the promise to finish in the first one since 
    we didnt use it jumped to the next line and the next 
    one what it did was that it waited for promise to be 
    resolved important to understand 
*/