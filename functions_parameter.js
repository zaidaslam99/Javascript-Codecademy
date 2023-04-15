// const addOneToOne = () => 1 + 1;
// // console.log(addOneToTwo());

// // timeFuncRuntime(addOneToOne)


// console.log(timeFuncRuntime(addOneToOne));

/*
    * So here lets examine what is going on the first thing that we need to know 
    is that we create a function in it we pass in a prameter and we then decalre a 
    variable and pass in the Date.now() this is going to let us get the date I think 
    and within that function we are calling the function again and then we get another 
    variable and then pass in the Date.Now() and all we do is subtract the value between
    them to we then create another function called addOneToOne and this function is going 
    to be doing what it specifed So ideally what is happening here is that we are passing 
    in a parameter for the function that we created we are passing in another function as a 
    parameter notice we passed in addOneToOne and we didnt put the () we passed it as it is  
*/

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 0; i < 5; i++) {
        if ( (2 + 2) != 4) {
            console.log("Something has gone very wrong :( ");    
        }
    }
};

// Another function
const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
};

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)

/*
    * So here lets understand what is going on in the first we created a funton with a long name 
    the second thing that we did was that we created another function called addTwo and this is going 
    to be just adding a value plus our parametner i like to call these direct functions they do what 
    you wnat them to do we than created the timeFuncRuntime and this function is going to be taking 
    in a parameter value so we than created a new varaible set it to the timeFunc and then passed in the check 
    function this is teaching us that not only can we create a function using just variable or setting 
    a variable to a function so that variable can act as a function we can also pass in an arguemnt to that 
    function. So here lets examine this with a fresh head the first thing that we need to know is that we 
    are passing in a function that is just checking a loop into another function now the function that is 
    looping we dont need to pass in any args to it instead what we do is we pass in the function as a 
    parameter then what we do is we declare the variable and it uses Date.now() and i think that its storing a 
    number in it then the loop runs 4 times and then it stores another number and all we do is subtract the number 
    something else that we need to learn is this that we can pass functions stored within functions to variables 
    if you compare the code from bottom on the bottom we passed in a function normally how one ought to and here 
    what we did was that we created a variable and then created a function and passed in another function i like 
    to think of this as an object variable taht references this function which is takin in another function that 
    is something important to consider when writting this code.
*/

const checkConsistentOutput = (func, value) => {
    
    let runOne = func(value)
    let runTwo = func(value)

    if (runOne === runTwo) {
        return runOne
    }
    else {
        return "This function return inproper results"
    }
}

console.log(checkConsistentOutput(addTwo, 5));

 
/*
    * So lets examine what is going on here now the first thing that you need to know is 
    that we are mkaing a function which is take in two parameter value in this case the func and then 
    the value the second thing that we need to know is that we create two variables and whats weird is that 
    we are tkaing in another parameter value wihtin a parameter value this is something that seems new we set
    and if condition that if the two variables are equal to one another then return the first variable else 
    return this function retruns an inproper results so what we do is we call this function and then pass 
    in another function and then the value 5 so lets look at the detail the first thing that we need to 
    understand is that we are passing in a function to parameter argument once we understand that we 
    then understand that we also need to pass in a value to the function so essentially this code is saying that 
    pass a function and also get its parameter value earlier we talked about how we can pass in a function into
    parameter value but now say we created a function that needs a parameter value we now can pass it like this 
    so we get the name of the function and then its value so for the addTwo function all this is going to be doing 
    is adding 2 to number but we need to get number and that is where the value kicks in and if we do that we get 
    5 + 2 = 7 and the second varaible we do the same therefore our if condition runs 
*/