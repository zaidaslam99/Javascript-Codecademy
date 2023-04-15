/* Acessing and updating properties is fundamental in working with objects 
    however there are cases in which we dont want other code simply accessing and 
    updating an object properties when discussing privacy in objects we define 
    it as the idea that only certain properties should be mutable or able to change in 
    value certain languages have privacy built in for objects but JS dont have this 
    feauture rather JS developers follow naming conventions that signal to other dev
    how to interact with properties one common convention is to place an underscore 
    before the name of the property to mean that hte property should not be alterd */

const bankAccount = {
    _amount: 100
}

bankAccount._amount = 1738

console.log(bankAccount._amount);

/* So here the thing that I wanted to mention was that we declare a property and in JS to 
    make the property private we would use the _property here the thing that I wanted to 
    mention was that the proerpty can still be changed its naming convention */

/* The next thing that we are going to be talking about is getters and setters both methods 
    are used to respect the intentions of properties prepended or began with getters can 
    return the value of internal properties and setters can safely reassign property values */

const robot = {
    _energylevel: 100,
    recharge () {
        this._energylevel += 30;
        console.log(`Recharged Energy level is currenetly at ${this._energylevel}`);
    }
};

robot._energylevel = "high";

// Notice how we changed the properties here
console.log(robot._energylevel);
robot.recharge()

/* This is a side effect known as type correcion meaning that this code is going to be 
    adding 30 to the string that we wrote something else that I wanted to mention was 
    notice the this which helps us get the attribute here and notice how this is adding 
    30 to our new property which is a string something to take into notes*/