// function successCallback(result) {
//     console.log(`Audio file ready at URL: ${result}`);
// }
  
// function failureCallback(error) {
//     console.error(`Error generating audio file: ${error}`);
// }
  
// createAudioFileAsync(audioSettings, successCallback, failureCallback);


/*
    * A promise is an object that represents the eventual completion 
    or failure of an async operation, essentially a promise is a returned 
    object to which you attach a callback into a function so notice that 
    we have two different callbacks here notice the first two functions 
    we have put here. 
*/

const inventory = {
    sunglass: 1900,
    pants: 2492,
    bags:2830
}

const myExec = (resolve, reject) => {
    if (inventory.sunglass > 1000) {
        resolve("The inventory is greater than  1000")        
    } else {
        reject("The inventory is less than 1000")
    }
}

const exec_func = () => {
    return new Promise(myExec)
}


/*
    * Something that I wanted to mention here is this that we created an exector
    function and in it we passed two parameters one called resolve and the other 
    called reject the thing that is happening in the function is fairly simple 
    now here the thing that we need to know is this we had created two functions 
    the second function that we created called exec_function we passed in a Promise 
    and passed in the my_exec function now something cool to understand here is this 
    earlier the video said that Promise uses these resolve() and reject() and passess 
    its own stuff in like a vessel we arent really creating it so that is why we pass 
    in the function to the other function that we created.
*/






console.log(exec_func());

// Async function.
setTimeout(() => {
   console.log("Hi"); 
}, 1000);