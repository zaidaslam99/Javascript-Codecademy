let myPromise = Promise.all([returnsFromOne(), 
    returnsFromTwo(), returnsFromThree()])

myPromise
.then((arrayOfValues) =>{
    console.log(arrayOfValues);
})
.catch((rejectionReason) => {
    console.log(rejectionReason);
});

/*
    * We declared myPromise assigned to invoking Promise.all()
    we than invoke Promise.all() with an array of three promises 
    the returned values from functions we invoke .then() with a 
    success handler which will print the array of resolved value 
    if each promise is handled successfully we invkoke .catch 
    which will print the first rejection message if any promise 
    rejects.

    * SO here lets examine what is going on my theary here is 
    this that we create three promises and notice how we are 
    passing the output of the promises into arrays and we 
    use .all() what all does is that it gets each promise and 
    checks to see if its been resolved or rejected that is 
    something to be aware of when it comes to this code.
*/





























/*
    * When done correctly promise composition is a great way 
    to handle situations where async operations depend on each 
    other or execution order matters what if we are dealing 
    with multiple promises and dont care about the order 

    * To maximize effiencey we should use concurrency multiple
    async operations happening togehter we can use 
    promise.all() this accepts an array of promises as its 
    argument and returns a single promise the single promise 
    will settle in two ways 
        
        * If every promise in the argument array resolves 
        the single promise returned from Promise.all() 
        will resolve with an array containing the resolve 
        value from each promise in the argument array 

        * If any promise from the argument array rejects 
        the single promise returned from Promise.all() will 
        then reject with the reason why that promise rejected 

 */