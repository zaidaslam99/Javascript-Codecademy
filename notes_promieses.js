const myPromise = new Promise((resolve, reject) => {
    const error = false
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

/*
    * The first new thing that I learned here is that we are creating a 
    Promise and in it we are testing a condition we learned how a Promise 
    works where it has three states resolve, reject fulfilled now since 
    this promise is false that means its going to resolve here and its 
    going to say the message now when we log the variable that is printing 
    what is on the resolve what this means is that we are actually getting 
    the state of the promise we arent really getting the legit value 

    * Here is where the thenables come into place when we are using the 
    thenables its going to be getting the result of the promise if -> then 
    value something that we need to know is that in the thenables we are 
    going to be passing in a anonymous function and in it we are going to 
    be passing in a parameter value and that parameter value is going to 
    reference the state of the promise but its going to acutally be the real 
    state and not the avatar state.

    * So there was something big that I had learened when it came to this 
    code and that being we know that since the conditon is true our 
    promise is going to resolve but to understand it deeper the first thing 
    that we need to know is that the log statement is going to be displaying 
    the state of the Promise we need to actually get whats in the resolve and
    that being using .then() the very first one is going to return the value 
    that is in the resolve and then add 1 to it and the second .then is going 
    to log what is in the resolve value the cool thing here is that this shows 
    us how .then can be used whats in our resolve can be used or maniplulated 
    and we can further expand to what is in our resolve and have more stuff done 
    to it. 
*/