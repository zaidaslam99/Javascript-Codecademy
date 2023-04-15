/* Along with getter methods we can also create setter methods which reassign values of 
    existing properties within an object */

const person = {
    _age: 37,
    set age(newAge){
        if (typeof(newAge) === "number") {
            this._age = newAge;
        } else {
            console.log("You must assign a number to age");
        }
    }
};

// Displays 37
console.log(person._age);

// Changes to 17
person.age = 17 

// Display 17
console.log(person._age);

// Change to string 
person.age = "10"

// Display else statement
person.age

/* So there is something that I wanted to mention here and that being that notice that we
    used a setter what we than did was that we set a property the next thing that we need
    to be aware of is that we in the first we are displaying the property the next thing 
    that I wanted to talk about here is that we did the .age and notice how we changed the 
    age to 17 in the age function we are taking in an argument here and what we than do is 
    we set the function with an = sign what funny is that I made the mistake thinking that
    we are going to be putting in an argument my theory is that we dont have to use () 
    instead we have to use the = sign when it comes to working with setters Same thing here 
    setters dont need to be called with a set of () it looks like we are reassigning the 
    value of property */

const robot = {
    _model: "1E78V2",
    _energyLevel: 100,
    _numOfSensors: 15,
    
    get numOfSensors(){
        if (typeof this._numOfSensors === "number") {
            return this._numOfSensors;
        } else {
            return "Sensors are currently down"
        }
    },

    set numOfSensors(num){
        if (typeof num === "number" && num >= 0) {
            this._numOfSensors = num 
        } else {
            console.log("Pass in a number that is greater than or equal to 0");
        }
    }
}

robot.numOfSensors = 100
console.log(robot.numOfSensors);