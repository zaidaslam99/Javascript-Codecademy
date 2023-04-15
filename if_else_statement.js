// This is for true...
if (true) {
    console.log("The code in this block will run (true - if)");
} else {
    console.log("But the code in this block will not run");
}

// This is for false...
if (false) {
    console.log("The code in this block will not run");
} else {
    console.log("The code in this block will run (false - else)");
}

/*
    * An else statement must be paired with an if statement 
    and together they are referred to as an if...else statement.

    * Uses the else keyword following the code block of an if statement 

    * Has a code block that is wrapped by a set of curly braces {}

    * The code that is inisde the else statement code block will execute when
    the if statement condition evaluates to false.

    * if else statement allows us to automate solutions to yes or no questions 
    also known as binary switching.

    * So take a look at this code notice what we said here was that if false
    then it will print the else block something that I came to the conclusion was 
    that when using the if else statement and when it comes to true the if block 
    is going to be executing and then the else block is going to execute if false 
    this is simple programming logic. The thing that you need to be aware of here
    is that notice how we can put true and false here.  
*/

// More practice...
let sale = true

// Reassign the variable
sale = false

if (sale) {
    console.log("\nYo since this is true this is going to run")
}
else {
    console.log('\nYo since this is false this is going to run now')
}

/* 
    So here what I was going to write is that notice how we are going to be 
    reassigning our variable the second thing that I wanted to highlight here 
    is that the else statement has {} right after it there are no () it starts 
    off at the if statement.
*/
