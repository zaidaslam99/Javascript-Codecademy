let username = 0;
let defaultName;

if (username) {
    defaultName = username
    console.log(defaultName);
    console.log("True");
} else {
    defaultName = username
    console.log(defaultName);
    console.log("False");
}

/*
    * So this code is fairly simple to understand there is something that 
    you need to know though we first declare two variables the first being "a"
    the second being defaultName in JS we had talked about how we can declare a 
    variable and set no values to it so when it comes to this code we declared a 
    truthy value and then had an empty variable if tru we assinged the truthy value 
    to variable and then printed that variable same goes for the else if it was a 
    falsy value.

    * So to recap this code since its a falsy value its going to print the else statement 
    and the thing and the thing that I wanted to recap with JS is that we can declare 
    empty variables and notice that we declared an empty variable called defaultName and we 
    know that its going to set the defaultName to the username and what we then do is that 
    we log the defaultName. If we set the code to a truthy value we then log the if condition.

    * Another momment of detail is that since we stated the variable with a value even if the 
    variable had a falsy value the if condition would still have the variable written that will 
    stand for truthy value...
        
    // Notice that variable is set to falsy
        let username = 0;
    
    //  The variable by itself stands for true.
        if (username) {}
    
    // This will stand for falsy. 
        else {}
*/ 

/*
    // Pythonic Way

    var = ""

    if var:
        print("The variable is true")
    else:
        print("the variable is false.")
    
    This code from python is something that I wanted to exress using this 
    logic where we are declaring a false value for our variable and then we 
    are checking the outcome of that variable and the if statement stands 
    for if var is true and else stands for if the var value is false the same
    logic applies in python.
*/