/*
    * JS assigns the truthy value to a variable if you use the 
    || operator in your assignment. 

    * Because || statements check the left hand condition first the 
    variable defaultName will be assigned the actual value of username 
    if is truthy and is assigned the value of 'Stranger' if username is 
    falsy. This concept is known as short circut evaluation.

    // Short Circut Evaluation
    
        let defaultName = username || "Stranger";

        * So lets ellobarote what is going on here what this is saying is that we are 
        setting a variable that is defaultName if it its true then its going to be assigned 
        the value that is the username and if it is false then its going to be assigned the value 
        "Stranger" 
*/


// More Practice...

// Declare the variable to true with a value
let tool = "marker";

// declare the other variable and set it to a 
    // true or false value.
let writtingUtensil = tool || "pen";

// log the value of tool variable.
console.log(`The ${writtingUtensil} is mighter than the sword`);

/* 
    * So here notice what we are doing we are declaring a variable called 
    marker and then what we do is we declare an undeclared variabled called 
    writtingUtensil we set that equal to tool || "pen" what this means is that 
    if the value of tool is false then its going to be "pen" if the value of 
    tool is going to true then its going  use that variable value.
    
    * So essentinally one thing that was new to this code was that we are assigning 
    a variable with another variable and that variable is going to be assigned if the 
    outcome is either true or false
*/

// Declare the variable with a False value.
let varCheck = 0;

// Declare an emptyVar if the varCheck is true then its going to be varCheck
    // else false its going to be string false. 
let emptyVar = varCheck || "False";

// Notice that we are logging the var that is set with a false value.
console.log(`Value of variable is ${varCheck}`);