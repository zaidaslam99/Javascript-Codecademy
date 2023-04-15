console.log("Start");

setTimeout(() => {
    console.log("We are in timeout");    
}, 2000);

console.log("End");

/* 
    * So there is something that you need to know the first thing that JS is very line 
    by line this is called sychronus meaning that its going to execute line by line the 
    second thing that we need to know is that we have async code in JS what does this mean?
    its really simple so in this code one would think that JS is going to run the first 
    log statement and then its going to run the function that we defined and then its going 
    to run the ending log statment rater that is not the case this is going to run start 
    then end then function this might seem counter intutive here rather that is not the 
    case here its going to run the start then end then function.

    * Now the real question that you might be wondering is how is it running this code here 
    like this? so the first thing that you need to know is the difference between callstack
    and web Apis the call stack is going to be having the queue of code that is going to be 
    running line by line that is first thing that you need to know this is for sync JS here 
    the second thing that you need to know is this that there is something called web Apis 
    here and what they are needed for is simple 

    * The first thing that we need to know is that our setTimeout() is no different from a 
    callback function its this function that we created that is going to be doing something 
    after a set amount of time in this case 2 seconds here now the other thing that you need 
    to know is this that when we run our funtion it goes to the land of web Apis and its going 
    to be stored there and executed JS is going to do the first line and then the last and go 
    back to the Api and check there and see the result and come back and bring it that what it 
    means to run async here    
*/