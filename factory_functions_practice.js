const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log("beep Boop");
        }
    }
}

const tinCan = robotFactory("p-500", true)
tinCan.beep()


/* So look how we created this function its called robotFactory and in it we have the model
    and moble parameter we then are then setting the key as the model and the value as the 
    parameter and its important to understand that when it comes to key and value the 
    parameter that is referenced to the value can be the same the key that is something to 
    be considerate about here the next thing that we do is we create a function called beep()
    and we are logging a phrase. The next thing that I wanted to expand on here is that we 
    created function object called tinCan and what we did was that passed in two args to our 
    para value and this is similar to the pythonic way of doing things however there is one 
    difference and that being that first we were create our function and we are using the 
    object oriented apprach and adding key and values to our functions not to mention we are 
    also defining a function */