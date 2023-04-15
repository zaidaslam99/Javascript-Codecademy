const rectangleArea = (width, height) => {
    let area = width * height
    return area
};

/*
    * So what we need to know is that ES6 introduced arrow function syntax 
    a shorter way to write functions by using the special "fat arrow" () => 
    this notation means that this is refering to a function 
    
    * Take a look at this code within the () we have parameters and then we have the 
    arrows we then have a variable that is getting the width and height and then we are 
    multiplying it notice how we are not writing a function name instead we declare a 
    variable and then we declare a function and important question that comes to mind is 
    that how do we know which function to call and we dont call a function rather we pass 
    in arg to variable and then get the output that is something important to understand.
*/

const plantNeedsWaters = function(day) {
    if (day === "wednesday") {
        return true;
    } else {
        return false;
    }
}
// Notice all we really did was take the function out and then 
    // put the => which was about it.

const plantNeedsWater = (day) => {
    if (day === "tuesday") {
        return "Its hump day"
    } else {
        return "Its not hump day"
    }
}

console.log(plantNeedsWater("tuesday"));

/*
    * So here notice what we are doing is that we are writting the same code that we wrote using this 
    format and the important thing to understand here is that we declared a variable and then we passed in 
    the parameter for it started our function and then stated our conditional statement and returned the 
    message that was apporiate for it so notice that we passed in a string value to our variable this is 
    an important step to understand.
*/

