const logSkyColor = () => {
    let color = "blue";
    console.log(color);
};

logSkyColor()
// console.log(color); // Gives an error

/*
    * So here its pretty simple we created a function named logSkyColor and then 
    we pass in no args and then we create one variable and then store a string value 
    and then print that string laue we run the function notice function runs cuz there 
    is a print statement and the second line of code what we do is we try to print the 
    value of the variable that is declared to that function and we cant because that variable 
    only exist within that blocl the other thing that I wanted to mention was that the best 
    way to look at it is like the function that we want to create and then the parameters 
    that we need to pass in and then the what goes inside the function
*/

const logVisableLightWaves = () => {
    const lightWaves = "Moonlight";
    console.log(lightWaves);

}

logVisableLightWaves() 