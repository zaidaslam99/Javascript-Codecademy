/* Objects in JS are containers that store data and functionality we are going to learn 
    how to use the this keyword conveying privacy in JS methods defining getters and 
    setters creating factory functions using destructing techniques */

const robot = {
    model: "B-4MI",
    mobile: true,
    greetMaster(){
        `I am model ${this.model} how may I be of service`
    }
}

const massProdRobot = (model, mobile) => {
    return {
        model,
        mobile, 
        greetMaster(){
            `I am model ${this.model} how may I be of service?`
        }
    }
}

// Pass Parameter to our functions
const shinyNewRobot = massProdRobot("TrayHax", true)

// Display the output of massProdRobot function
console.log(`model name: ${shinyNewRobot.model}`);
console.log(`mobile: ${shinyNewRobot.mobile}`);
console.log(`Function: ${shinyNewRobot}`);
console.log();

const chargingStation = {
    _name: "Electrons-R-Us",
    _robotCapacity: 120,
    _active: true,
    _changingRooms: ["Low N Slow", "Middle of the Road", "In and Output"],


    set robotCapacity(newCapacity){
        if (typeof newCapacity === "number") {
            this._robotCapacity = newCapacity;
        } else {
            console.log(`Change ${newCapacity} to a number`);
        }
    },

    get robotCapacity() {
        return this._robotCapacity
    }
}

/* So here we are going to be tlaking about some advanced objects in JS and the first thing
    that we need to know is that we created a robot object in it we gave it a key and value 
    and function the next thing that we did was that we created a function or more so of a 
    reference function and in it we passed the model and mobile parameter so this function 
    is going to be taking in parameter values something that is new to this function is that 
    we are using the return statement and all we simply did was sue return {} and it returned 
    everything that is in these statement and what this is going to be doing is its going 
    to be returning the model the mobile parameter and the function so the next thing that we
    did was that we passed in two parameter values to our function. */

/* So we created another object that is called charging station and the thing to know here 
    is that in it we gave it 4 different key and values the next thing that we did was 
    that we passed in the values to our keys then we set a function called set and then 
    oassed in a parameter called newCapacity we the stated that the typeof to the para.
    is equal to the string number then we use the this keword on the robotCapacity and 
    make it equal to newCapicty else we we display a string that says a message to change 
    to a number we then use a get function that retrun this._robotCapacity now the last thing
    that I wanted to metnion was that when it comes to this code there are alot of things 
    are unclear but we will learn them more on into the next level */

/* Something that I wanted to mention was that we used the setter and the getter with the 
    objects that we created this is similar to the oop that we did when it comes to pythonic 
    programming and thus we created function underneath and use those function to work with 
    key and values wihtin the object that we created that is something to be aware of here
    as well */