/*
    * In application code objects are often nested an object might have another object as 
    an property which in turn could have a property that an array of even more objects
*/

const spaceship = {
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: "Sandra",
            degree: "Computer Engineering",
            encourgeTeam () {
                console.log("We got this!");
            }
        }    
    },
    engine: {
        model: "Nimbus2000"
    },
    "nanoElectroincs": {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        "Backup": {
            battery: "Lithium",
            terabytes: 50
        }
    }
};

console.log(spaceship);

/*
    * So this code just got real the first thing that we need to know is that we are 
    working with objects meaning that we created an object variable called spaceship 
    and what we need to know is that this is holding in our objects we talked about
    how we can set objects to methods earlier now we are learning how we can set 
    objects to objects the first object variable that we created was telescope and 
    this one is simple we get three different variables and their args values the next 
    thing that we are going to be talking about is that we created an object that is 
    holding an object in which is weird tbh we create a crew object that is going to be 
    holding a captain object with two args and notice how there is also a function that 
    is stored in here that was something tlese that I was suprised that wow you can put 
    a function with an object wihtin an object then we have the engine object which is 
    holding a value the next thing that we are doing we have nanoElectronics object that 
    is holding more than one object references
    
    * We can use chain operators to access nested properties 
*/

let variable = spaceship["nanoElectroincs"]["Backup"].battery

console.log();
console.log(variable);

/*
    * So here there was something that I found to be reall cool the first thing that we 
    are doing is returning a value into the variable and we are calling the object then we
    are calling the object wihtin the object and something that I wanted to mention in this 
    code was that we can have objects within our object that is something that we learned
    now somthing else worth knowing is that we can have multiple objects meaning more than
    one key and value so we can have key and value and then we go deeper in object we 
    have mutliple keys and values within the object within object so for example if you look 
    at nanoelectroincs you can see that this is taking in multiple keys it has computer 
    and backup key so its going to Backup and now its going to the battery key and its going 
    to be returning lithium in here
*/