const executorFuntion = (resolve, reject) => {
    if (someCondition) {
        resolve("I resolved")
    } else {
        reject("I rejected")
    }

};
const myFirstPromise = new Promise(executorFuntion);


/* 
    * Notes regarding promise object, to create the promise object we use the new keyword 
    and the promise constructor method the Promise constructor method  takes a function 
    parameter called the executor function which runs automatically when the construcotor 
    is called the executor function generally starts an asynchronous operation and dictates
    how the promise should be settled 

    * The executor function has two function parameters usually reffered as the resolve() and 
    the reject() functions the resolve() and reject functions() arent defined by the programmer 
    when the Promise construcors runs JS will pass its own resolve() and reject() functions into the 
    executor function 

    * resolve() is a function with one argument it will change the promise status from pending to 
    fulfillled and the promise resolved value will be set to the argument passed into the resolve()

    * reject is a function that takes a reason or error as an argument under the hood if invoked 
    reject() will change the promise status from pending to rejected and the promise rejection reason 
    will be set to the arguement passed into reject() 

    * So noticed what we did here we created a function called the executorFunction in it we had passed 
    two parameter one called resolve and the other called reject the next thing that we did was that 
    we set a new Promise to a variable and passed in the executorFunction to our Promise 
*/

