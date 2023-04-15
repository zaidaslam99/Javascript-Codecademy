const satellite = "The moon";

const galaxy = "The milky way";

let stars = "North Star";


const callMyNightSky = () => {

    // NOTICE that we arent using the let keyword refer to second block of notes.
    stars = "Sirius";
    
    return "Night Sky: " + satellite + ", " +
    stars + "," + galaxy;
};

// Call the function 
console.log(callMyNightSky());

// Log the variable
console.log(stars);

/*
    * Scope pollution is when we gave to many global variables that exist in the 
    global namespace or when we reuse variables across different scopes scipe pollution 
    makes it difficult to keep track of our different variables and set us up for potential 
    accidents globally scooped variables can collide with other variables that are more locally 
    scoped causing unexpected behavour in our code.
*/

let num = 50;

const logNum = () => {
    let num = 992
    console.log(num);
};

// Call the function 
logNum()

// Log the variable
console.log(num);

/*
    * So there is something else that we learned about variable scoping and the 
    thing that I wanted to mention was that we set a variable using the let keyword 
    and the next thing that we do is that within the function we use the same variable 
    without using the let keyword when we use the let keyword and declare a variable 
    within a function when we call the function its going to be reconigizing that variable 
    and say if we wanted to log the variable then we use the variable itself its really
    important to understand that when it comes to this type og logic what it means is that 
    without using the let keyword its going to printing the wrong value
*/
