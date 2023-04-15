// This is how we used to write the if else statement.

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


/*
    * So earlier we had talked about how we can declare a variable 
    and depending on the variable it will either print the if clause 
    or the else clause and that much is true. Now we are going to be 
    covering concepts such as ternary operators and these are basically 
    a way to write the code more simple.

    * The first letter is saying if the variable isNightTime is true then we 
    start the if clause starting the ? and then we use the log() after that 
    out else clause is going to begin with : this is going to state if the 
    variable that we have is false and this is going to print the else clause.
*/

// More practice...


// Example 1
// Using the standard way
let isLocked = false;

if (isLocked) {
    console.log("You will need a key to open the door");
} else {
    console.log("You will not need a key to open the door");
}


// Using ternary operators
isLocked ? console.log("You will need a key to open the door"):
console.log("You will not need a key to open the door");




// Example 2
// Using the standard way
let isCorrect = true;

if (isCorrect) {
    console.log("Correct");
} else {
    console.log("Incorrect");
}


// Using ternary operators
isCorrect ? console.log("Correct"):
console.log("Incorrect");




// Example 3
// Using the standard way
let favouritePhrase = "Love that";

if (favouritePhrase === "Love That!") {
    console.log("I love that");
} else {
    console.log("I dont love that");
}


// Using ternary operators to check if the variable 
    // is equal to the variable.
favouritePhrase === "Love that" ? console.log("I love that"):
console.log("I dont love that");

/*
    * Something that I wanted to make different from this code is that notice that we 
    set the variable to "Love that" in the first variable spot and the second line what 
    we do is that we set the variable === "Love that" ? console.log() : console.log()

    * So here I wanted to ellobrate that we can work with if the variable is equal to 
    the value that we entered then on the if conditon print the statement if true and then 
    for the else statement print the statement else false.    
*/
