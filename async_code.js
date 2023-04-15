console.log("This is the first line of code");

const usingSTO = () => { 
    // Will run immedatley 
    console.log("ASYNC Code");

    // Delayed run 
    setTimeout(usingSTO, 9000);
}

usingSTO()

console.log("This is the last line of code");

/*
    * So here lets examine something we created a function 
    and in that function what we did was pass a log statment 
    and then we called the setTimeout API and we passed 
    in the function that we made into the API function and 
    put a time limit of 1 second 

    * Something that I learned when it comes to this 
    function when calling it we are getting an infinite loop
    where after one second we keep getting the log statement 
    that is in the function 

    ___________________________________
    This is the first line of code
    ASYNC Code
    This is the last line of code
    ASYNC Code
    ASYNC Code
    ASYNC Code
    ASYNC Code
    ___________________________________

    * So I think I get the logic here now what is happening 
    is that since we created the function in our first instance 
    we said log the ASYNC code its working normally not asyncly 
    its only when we call setTimeout its starts working API ly 
    that is something to be aware of here and we also learned 
    that we can declare a function and then call that function 
    within the function its like saying hey create this and use 
    this so it goes back to itself and gets used 
*/