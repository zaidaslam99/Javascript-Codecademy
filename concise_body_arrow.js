/*
    let isNightTime = false;

    if (isNightTime) {
    console.log("Turn on the lights!");
    } else {
    console.log("Turn off the lights!");
    }

    // We can use the ternary operators to perform the same 
    // functionality

    isNightTime ? console.log("Turn on the lights!") : 
    console.log("Turn off the lights!");

    * Notice this is ternary operators here the first line we had set a variable to false and then we used 
    the conditional statement that if and else here we said isNightTime this means that true the if block 
    is true and the else block is false unless specified otherwise that var is false then print this that 
    is something else that you need to consider the first variable is going to be checking if true and then 
    it has its preset value that needs to be cross referenced with the other thing to know is that after ?
    is the if condition and : is the else condition.
*/


const plantNeedsWaters = (day) => {
    return day === "wednesday" ? true : false;
};

const plantNeedsWater = day => day === "wednesday" ? true : false;

/*
    * So this is known as concise body arrow functions JS also provides several way to 
    refactor arrow function syntax the most condensense form of function is known as concise 
    body function that only take a single parameter do not need that parameter to be enclosed
    in () however a function takes multiple parameter () are required so since this function 
    is taking a single parameter we dont need the () something that I wanted to point out here 
    is that we are learning about functions and how we can set them to a variable let go back and 
    take a look at these notes...
    
    * So to recap everything that we learned this last code lines does it all notice first that
    we define a const keyword and then the variable name and we assign a parameter value and 
    then the return what paramter should equal something else is that we using the thick arrow 
    notation the second line what we do is that on the left is the paramter value and the right 
    of thick arrow is what the variable should equal to and when it comes to it being true and 
    false that is the use of conditionals we learned how when creating a function we have to 
    define a function and overall its similar to pythonic approach and when it comes to the use 
    of concise function we first specify the variable and then function parameters than the thick 
    arrow and check the condition of the parameter and if true else false and then end the code 
    something I like about this code is that once you learn how to read it it makes writting the 
    code so much more simple.
 */




