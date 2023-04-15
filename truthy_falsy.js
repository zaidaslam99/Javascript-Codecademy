let myVariable = "I Exist";

if (myVariable) {
    console.log(myVariable);
} else {
    console.log('The variable does not exist');
}


/*
    * The code block in the if statement will run because 
    myVariable has a truthy value even though the variable value 
    isnt explicitily the value true when used in boolean or 
    conditional context it evaluates to true because it has been 
    assigned a non falsy value 

    * The important thing to understand when it comes to programming 
    is that certain values will result to true in python this was 
    something that I learned as well since this variable has been 
    declared and since we are checking it condition we are seeing the 
    the value will return true.

    * The things that are falsy values are 0, "" or '', null, undefined, NaN
*/

// More Practice...

let numOfApples = 0;

if (numOfApples) {
    console.log("Let us eat apples");    
} else {
    console.log("No apples left");
}

/*
    * So earlier I had talked about what makes a falsy value now the thing that 
    I wanted to mention here is that notice that this variable is set to 0 the 
    mistake that I made was thinking that since the variable is filled with a value 
    therefore its going to be true and that is not the case the variable cant be 
    filled with 0 or null or empty string when you see a number that is empty means that 
    it is false important to understan this logic here.
*/

// This eval to False.
let wordCount = 0;

if (wordCount) {
    console.log("Great you started your work");
} else {
    console.log("Better to get to work");
}

// This eval. to True
let favPhrase = "Hello World";

if (favPhrase) {
    console.log("The string doesnt seem to be empty");
} else {
    console.log("The string is empty for sure");
}

// This eval. to True
let Count = 1;

if (Count) {
    console.log("Great you started your work");
} else {
    console.log("Better to get to work");
}


// This eval. False
let Phrase = "";

if (Phrase) {
    console.log("The string doesnt seem to be empty");
} else {
    console.log("The string is empty for sure");
}


/*
    * So to recap empty strings, 0, null falsy values important to 
    understand.
*/