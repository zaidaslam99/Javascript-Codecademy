const plantNeedsWater = function (day) {
    if (day === "Wednesday") {
        return true
    }
    else {
        return false
    }
}


console.log(plantNeedsWater("Tuesday"));

/*
    * So this is called function expression and there are a couple of new things that we are doing here 
    the first thing that I wanted to address here is that we created a variable called plantNeedsWater and 
    set it to a function in it we gave it an arg day we then stated if day === "Wednesday then return true else 
    return false the first thing notice is that we didnt give it a function name instead we simply just used 
    function this is known as a function expression the function name is usually omitted a function with 
    no name is called an anonymous function a function expression is often stored in a variable to declare a function 
    expression we declare a nme or identifer of our function its common practice to use the const as the keyword to
    declare the variable we then assing aas that variable value an anonymous function created by using the function keyword 
    followed by a set of parentheses with possible parameters then a set of curly braces that contain the function body.
    
    * Our variable is going to be called plantNeedsWater and then what we do is that we use the function and in it we give the 
    parameter if day === "Wednesday" then it returns true else it returns false why ? notice that we are passing in a argument 
    to our variable value this is different from python because this was something that normally wont happen in python.
*/