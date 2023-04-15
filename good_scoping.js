const logSkyColor = () => {
    const dusk = true;
    let color = "blue";
    if (dusk) {
        let color = "pink";
        console.log(color);
    }
    console.log(color);
};


// console.log(color);  // Reference Error

logSkyColor()

/*
    * So here this code the mistake that I made was that I was thinking that
    the last line was similar to writing an else statement rather that is not 
    the case what is going on here is that we are learning about spacing and the 
    thing to take away from here is that we set a bool value within the and then we 
    set a variable and then we stated if variable is true then change the value of the 
    variable and print that out and outside the if block what we did was that we just
    logged the variable value and we got it to print the global values.
*/


/*
    * While we use block scope we still pollute our namespace by resuing the same variable name 
    twice a better practice would be to rename the variable inside the block 
*/

const logVisableLightWaves = () => {
    
    let lightWaves = "Moonlight";
    
    let region = "The Artic";
    
    if (region === "The Artic") {
    
        let lightWaves = "Northern Lights";
        
        console.log(lightWaves);
    }

    console.log(lightWaves);
};

logVisableLightWaves();



/*
    * So here lets examine what is going on here first and foremost we create a function that is
    we arent really passing in any parameters or anything we have declared two simple variables 
    then a conditional statement about these vairables and if the region is equal to the second 
    variable we change the value of that variable and go ahead and then print that variable outside 
    the block its going to hold the orginal variable value its important to understand that the code 
    is teaching proper variable naming convention.
*/