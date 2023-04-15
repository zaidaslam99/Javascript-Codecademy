/*
    * Another way to take advantage of concurency when we
    have multiple promises which can be executed at once 
    is to await a Promise.all()

    * We can pass an array of promises as the argument to 
    Promise.all() and it will return  a single promise the promise 
    will resolve when all the promises in the array have 
    resolved the promise resolve value will be an array 
    containing the resolved values of each promise from 
    the argument array 
*/

async function asyncPromAll() {
    const resultArray = await Promise.all([
        asyncTask1(), asyncTask2(), asyncTask3(),
        asyncTask4()
    ]);
    for (let i = 0; i < resultArray.length; i++) {
        console.log(resultArray[i]);
    }
}


/*
    * Here lets examine what is going on we created an 
    async function and what we are doing is we are than 
    creating a variable and in it we are passing await 
    then promise.all and then the array we run a for loop
    through our function and we display the promise 
    value for each function 
*/