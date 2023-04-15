const logSkyColor = () => {
    let color = "blue";
    console.log(color);
};


logSkyColor()


/*
    * So here lets take a look at what is going on the first thing that 
    we are doing is that we created a variable called logSkyColor and here 
    we didnt pass in any parameter values after the = sign we then use the 
    thick arrow and then declared some variable and then logged that variable.

    * A Block is the code found inside a set of {} blocks help us group one or 
    more statements togehter and serve as an important structural marker for our 
    code.

    * Something that I wanted to talk about here is that we are calling the function 
    and this has a vairable stored with a string value and we then log the value of that 
    variable and this will write out the color blue essentially what we are doing is that 
    we are creating a simple function that stores a value and then displays it the thing 
    that we need to know is how we use concise function where we declare the variable 
    that is const important and then after the = its parameter and then the fat arrow anything 
    after that is saying what foes into function so first where function is stored second what 
    are the function parameter and their parameter and third what should happen to its parameters
*/


const city = "New York City";

const logCitySkyline = () => {

    let skyscrapper = "Empire State Building"
    
    return "The stars over the " + skyscrapper + " in " + city;
}

console.log(logCitySkyline());

/*
    * So to recap here what we did was that we declared a vairable and we were 
    supposed to talk about scope but it became a review over what we learned so we 
    created a const variable and within it we are using a function and then we passed 
    in 0 parameters and then within the function we created another variable we used the 
    variable that was lofcal and then we used a outside variable and then simply returned the 
    value important thing to understand that I forgot that we are creating a variable and then 
    storing a function to that variable.
*/