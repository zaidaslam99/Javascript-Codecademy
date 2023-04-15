const robot = {
    model: "1E78V2",
    energyLevel: 100,
    funcationality: {
        beep(){
            console.log("Beep Bop");
        },
        fireLaser(){
            console.log("Pew Pew");
        },
    },
}

// Traditional way of doing things
const x = robot.funcationality.beep()

// Display x 
x

const {beep} = robot.funcationality

// Display the beep function
beep()


const {fireLaser} = robot.funcationality

// Display the fireLaser function
fireLaser()

/* So lets examine this code the first thing that we are trying to do is we want to 
    run the beep function and the fireLaser function the first thing that we need to
    understand is the traditional way of doing things using dot notation and its really 
    long to use all that very cumbersome the next thing that we are doing is doing it 
    the destrcutrued way where we put the name of the function and then the object and 
    the key of the object now I knew that we need to get to the interanl function and 
    and the ide wasnt accepting () so we had to write it at it is and then towards the 
    end we wrote beep() to display the function and we used the object.key to get the 
    inner key that is something to be conisderate about here and we did the same thing
    when it comes to fireLaser  */


// A simpler way of writting this
const {funcationality} = robot
funcationality.beep()

/* Something that I learned in this code was that we can use the functionality key 
    and then we can use the method here on the functionality key because then it can 
    access the other functions that is something to be considerate about here.*/ 