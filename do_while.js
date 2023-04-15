let countString = "";
let i = 0;

do {
    countString = countString + i;
    i++
} while (i<5);

console.log(countString);


/*
    * So this is something new that I learned when it comes to the basic of JS
    and the thing to know here is that the first thing that we did was that we 
    declared a variable and set it to an empty string the second thing that we did 
    was that we declared a count value to 0 and what we then did was that we set the 
    countstring equal to number plus no space and we accumualted something right off the
    bat that I wanted to talk about here is that we put the accumulator value within the 
    do value and the while was how long you want the condition to run outside of the while we 
    have the console.log set and what it did was that it displayed the results.
    
    * In some cases you want a piece of code to run at least once and then loop based on a 
    specific condition after its inital run this is where the do while loop comes in so this 
    code is going to run once and then the loop is going to start that crazy so this is 
    saying that do this while this something that I leanred is that when it comes to while 
    loops you say while a statement is true or false and when it comes to the do statement 
    you are saying that hey do this and then the condition so one is the condition and then what 
    we do the other is what we do and the condition interesting way to look at things.

*/

const firstMessage = "I will print";
const secondMessage = "I will not print";

do {
    console.log(firstMessage);
} while (true === false);

while (true === false) {
    console.log(secondMessage);
}

/* 
    * So this code there is something that you need to know what this is teaching is that 
    we are going to be creating the do clause and this is going to run the second thing that 
    we do is that from my understanding we set the loop to false 
*/

let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
    console.log(cupsAdded);
    cupsAdded++

} while (cupsAdded < cupsOfSugarNeeded);

// console.log(cupsAdded);

/* 
    * So lets examine this code more in depth the first thing that I wanted to make more clear was this 
    that in the end I have a console.log statement and what this is going to do is that we are going to
    be incrementing the cupsadded++ by one and then we are going to be the mistake that I made was that 
    I was thinking outside the while statement its going to run this code and that is not the case the while 
    statement serves as a way to check what the value is going to be compared to when it comes to the do 
    statement that is going to be doing all the work that is something to consider when it comes to working 
    with these types of do while loops. 

*/
