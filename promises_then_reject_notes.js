const myPromise = new Promise((resolve, reject) => {
    const error = true
    if (!error) {
        resolve("Yes! resolved the promise")
    } else {
        reject("No! rejected the promise")
    }
});

console.log(myPromise);

myPromise
.then(value => {
    return value + 1
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.log(err);
})

/*
    * So the first thing that we need to know here is lets say if the Promise 
    varaible that is being set is set so that the reject value runs what happens
    is that .then is best used when it comes to working with resolve and when 
    it comes to working with reject we cant use .then so it makes sense where 
    we are trying to say that hey if this reolves then do this so when we say 
    hey if this reject then do this.

    * Now here lets examine this we know that the code is going to be rejected 
    and what we do here is simple since we know that the first two then are 
    manipulating the promise resolve value the catch is just going to display
    whatever is in the reject block so it shows that hey they promise ran 
    and it got rejected lets do what is in the resolve block it works similar 
    to an else statement  
*/