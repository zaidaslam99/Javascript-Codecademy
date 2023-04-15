/*
    * The async keyword is used to write functions 
    that handle async actions we wrap our async 
    logic inside a function prepended with the async 
    keyword 
*/

async function myFunc(params) {
    // function body here 
};

//myFunc();

/*
    * we will be using async function declarations here 
    notice that we created a function and used the 
    async value infront of it we can also create function 
    expressions 
*/

const newFunc = async () => {
    // Function body here 
};

//newFunc();

/*
    * Notice there are two ways of doing this here when 
    we create the function expression we are passing in an 
    anyonymous function after async its the same as what we 
    wrote on the top.

    * async functions always return a promise this means that 
    we can use traditonal promise syntax like .then() and 
    .catch() with our async function as Async function will 
    return one of three ways 

        * if there is nothing returned from the function 
        it will return a promise with a resolved value 
        of undefined 

        * if there a nonpromise value returned from the 
        function it will return a promise resolved to that 
        value 

        * if a promise is returned from the function it 
        will simply return the promise.
*/  


async function fivePromises() {
    console.log("five");;
}

fivePromises().then((resolvedValue) => {
    console.log(resolvedValue);
})

