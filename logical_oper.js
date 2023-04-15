/*
    There are three logical operators... 
    
    and -> &&
    or -> ||
    not -> ! 

*/

let x = 10;
let y = 12;

if (x === 10 && y === 12) {
    console.log(`X is equal to ${x} and y is equal to ${y}`);
} else {
    console.log("X is not equal to 10 and y is not equal to 12");
}

if (x === 10 || y === 12) {
    console.log("At least one of the values is correct");    
} else {
    console.log("Neither x is equal to 10 nor y is equal to 12");
} 

/* 
    * So here we are going to be talking about logical operators and the 
    thing to know here is that when it comes to working with logical operators 
    you are working with and or and not value. The thing to know here is the 
    format notice the symbols that we are using we understand the logic 
    that comes from this but its important to understand and && and or ||

    * The not operator is also known as the bang operator that is something 
    else that you need to know.
*/

// Working with the not operator... 
let exicted = true

// We are using the ! operator here...
 console.log(!exicted);

 /*
    * Its important to understand when it comes to this code we are declaring a 
    variable that is set to true and then we are reversing the boolean value
    of that variable. So notice that we declared a variable and then we used the ! 
    to change the variable value so it went from true to false...
 */


// More practice...
let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" || tirednessLevel > 8) {
    console.log('Time to sleep');
} else {
    console.log("Not bedtime yet");
}

/*
    * So here there is something that I wanted to mention here and 
    that being the mistake that I made was that for the mood === this 
    is essentially saying that if this variable is equal to the value 
    when we use one = we are declaring the variable so in this code I 
    was declaring the variable I used one equal sign. 
    
    * In python you cant make this error here in JS like the code still 
    ran normally even though it was wrong but had you done the same thing 
    in pyton you would get a syntax error that is something important 
    to consider when it comes to writting this code.  
*/








































