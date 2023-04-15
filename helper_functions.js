function multiplyByNineFifths(number) {
    return number * (9/5)
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
}

console.log(getFahrenheit(15));

/*
    * We can use helper functions they are functions that are called within 
    another function so the first function is taking in a number and then it 
    is multiplying it by 9/5 and then returning that value the second function is 
    going to be taking in a value and then pass that into another function and then 
    its going to add 32 to it this is something to be considerate about so it makes 
    sense to call the getFahrenheit and then pass in 15 and that is going to call 
    another function within a function and then add 32 to it. 

    * We can use functions to section off small bits of logic or task then use them when we need
    to writting helper function can help take large and difficult task and break them into smaller 
    and more mangeable tasks.
*/

function monitorCount(rows, columns) {
    return rows * columns
}


function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200
}

const totalCost = costOfMonitors(5, 4);

console.log(`The total cost is $${totalCost}`);


/*
    * So lets take a look at what is going on in this code the frist thing that we need to know is that 
    we are creating a function called monitorCount and it takes rows and columns and all its doing is returning 
    the value of them multipled the second function that we built is called the costOfMonitors and this is going to 
    take in rows and columns and this function is where we are going to pass in the rows and columns and we pass 
    that in to the other function called monitorCount and pass in rows and columns use those parameter value and then 
    multiply by 200 the inside function is going to be using the same parameter from the parameter from the outside 
    the mistake that I made was thinking that we are going to be using different parameter values here like they stand 
    for thier own no that is not the case and once we muliply it we then * 200 and store the output to a variable that 
    this is similar to using functions within functions to get a point across.
*/