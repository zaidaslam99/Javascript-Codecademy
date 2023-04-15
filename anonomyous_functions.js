const sayHi = function (params) {
    console.log("Hello World");
}

// Pass in the function and then pass in the time it takes.
setTimeout(sayHi, 2000);

/*
    * So here lets take a look first thing that we did was that 
    we defined a varaible called sayHi and then we passed in function(){}
    and within the function we used log the other thing that we need to know 
    is that we are using the setTimeout and passing in the sayHi into it and 
    then the time in milleseconds 
*/

setTimeout(() => {
    console.log("Hello world");    
}, 2000);

/* 
    * So here this is going to be the same as the other thing that we wrote on 
    the top we created a setTimeout and in it we passed a function and then its 
    going to log hello world and then we passed in the time now the real thing to 
    know is this when we pass in an anonomous function the reason why we do it 
    is because we dont really need to store the function to a variable for example 
    if we are using the function only once there is no point to store it to a 
    variable instead what we are doing is that we can store it this way where the 
    first parameter is taking in a function and the second paramter is going to 
    be taking in a time something to be aware of here.

    * So there really is two appraoch of doing this the first storing a function to 
    a variable and then the second is passing the function directly into the parameter 
    value.

    * Something else that you need to know is function(){} and there is () => {} the two 
    different way of writting a function when using the keyword we dont use the fat arrow 
    notation. 
*/