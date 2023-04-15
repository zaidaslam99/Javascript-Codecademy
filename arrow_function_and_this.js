/* We saw in the previous exercise that for a method the calling object is the object 
the method belong to if we use the this keyword in a method then the value of this 
is the calling object however it becomes a bit more complicated when we start using the  
arrow functions for methods */

const goat = {
    dietType: "herbivore",
    makeSound () {
        console.log("Baaa");
    },
    diet: () => {
        console.log(this.dietType);
    }
}

// This will result as undefined.
//goat.dietType()

/* So here lets take a look at this we created a goat object and then we created a key and 
    value in it we created the makeSound function and then the diet function something 
    that I noticed right off the bat is this that when using the arrow function with the 
    diet it going to be using : and the => {} notation and when we run this code and 
    try to get this.dietType its going to return undefined */

/* In the comment you can see that goat.diet() would log undefined so what happened notice 
    that in the .diet() us defined using an arrow function arrow functions inherently bind or
    tie an already defined this value to the funtion itself that is NOT the calling object
    the value of this is the global object or an object that exist in the global scope which
    doesnt have a dietType property and therefore returns undefined */


const robot_obj = {
    energy_lvl: 100,
    checkEnergy () {
        console.log(`Energy is currently at ${this.energy_lvl}`);
    }
}

robot_obj.checkEnergy()

/* So recap this one is easy but when working with function and getting the object keys 
    values we have to use the this keyword this helps us get the value and we cant use the 
    arrow functon syntax on :*/