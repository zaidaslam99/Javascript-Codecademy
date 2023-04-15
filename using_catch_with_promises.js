/*
    * Speration of concerns means organizing code in 
    distinct sections each handling a specific task it helps
    us navigate our code and know where to look if something 
    isnt working 

    * .then returns a promise with the same settled value as 
    the promise it was called on if no apporiate handler was 
    provided this implmentation allows us to separate our resolved 
    logic from our rejected logic 
*/

prom.then((resolvedValue) => {
    console.log(resolvedValue);
}).then(null, (rejectionReason) => {
    console.log(rejectionReason);
})

/*
    * So honestly this is some confusing code because what is 
    happening here is that we are using .then() on the promise
    variable that we created and then its going to run a function 
    and then its going to use .then again and then another function 
    one function is resolved function the other is rejected function 
    really that simple.
*/

prom.then((resolvedValue) => {
    console.log(resolvedValue);
}).catch((rejectionReason) => {
    console.log(rejectionReason);
})

/*
    * So here lets look what is going on this is more simple to under 
    stand instead of using .then and .then we are passing a resolved 
    function in .then and in .catch we are using a rejectionReason really 
    all there is to it.

    * So here prom either resolves with Yay or oh noo if the promise 
    rejects .then will return a promise with the same rejection reason 
    as the orginal promise and .catch() faiilure handler will be invoked 
    with that rejection reason.
*/
