/*
    * One common pattern we will see when it comes to async 
    programming is multiple operations which depend on each 
    other to execute or that must be exectued in a certain 
    order. We might make one request to a database and use 
    data returned to us to make another request and so on 

    * The process of chaining promises together is called 
    composition promises are desgined with composition in mind 
*/

firstPromiseFunction().then((firstResolveVal) => {
    return secondPromiseFunction(firstResolveVal)})
    .then((secondResolvedValue) => {
        console.log(secondResolvedValue);
    });

/*
    * So lets break down what is happening in the first line we 
    are using .then and then we are passing in a function with a 
    parameter value what we than are doing is returning the second 
    function that we created and passing in a parameter in there 
    and then logging that value 

    * Overall what this code is trying to teach is that when it comes 
    to using .then we can pass in an anonymous function and there we can 
    run another function that is going to do something.
*/