let stoplight = "yellow";

stoplight = "red";

stoplight = "green";

stoplight = "blue";


if (stoplight === "red") {
    console.log("Stop!");
} else if (stoplight === "yellow") {
    console.log("Slow down");
} else if (stoplight === "green") {
    console.log("Go");
} else {
    console.log("Caution unknown");
}


/* 
    * We can add more conditions to our if else with an else if 
    statement the else if allows for more than two possible outcomes
    you can add as many else if as you like so its important to understand 
    that it is going to start with an if statement and then else and then else if 
    and the best way to write it after if you just write else and then an if statment 
    right next to it.
    
    * So this code notice that I had set a variable to "yellow" and proceed to change 
    it after each line the next thing that I did was that i used the stoplight variable 
    and set it equal to "red" in the if condition the important disction that I wanted 
    to make is that one = means assigning and === means comparing its no different from 
    python just with an extra = 
*/

// more pracitce...

let season = "summer";

if (season === "spring") {
    console.log("It\'s spring! The trees are budding!");
} else if (season === "winter") {
    console.log("It\'s winter! Everything is covered in snow");
} else if (season === "fall") {
    console.log("It\'s fall! leaves are falling!");
} else if (season === "summer") {
    console.log("It\'s sunny and warm because it\'s summer");
} else {
    console.log("Invalid season fam");
}

/*
    * So overall this code is simple to understand when it comes to formatting 
    using the else if clause in JS we set our variable = string of what we want 
    we then use the else if and then changed each value of the season and then 
    logged each response for each different else if clause and then at the end we 
    had an else statement.
*/ 