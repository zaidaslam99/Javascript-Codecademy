/*
    * The second way to access a key value is using the bracket notation. To use 
    bracket notation to access an objects property we pass in the property name key 
    as a string we must use bracket notation when accessing keys that have numbers 
    spaces or special characters in them
*/

// Example of Bracket Notation
console.log(["A", "B", "C"][0]);


let spaceship = {
    "Fuel Type": "Turbo Fuel",
    "Active Mission": true,
    homePlanet: "Earth",
    numCrew: 5
};

console.log(spaceship["Active Mission"]);
console.log(spaceship["Fuel Type"]);
console.log(spaceship["numCrew"]);

console.log();
console.log(spaceship.homePlanet);
console.log();

// Undefined
console.log(spaceship["!!!!"]);

/*
    * With bracket notation you can also use variable inside the brackets to select 
    they keys of an object this can be helpful when working with functions
*/

let returnAnyProp = (objectName, propName) => console.log(objectName[propName]);

returnAnyProp(spaceship, "homePlanet");

/*
    * So here I learned something new when it comes to this code and it was something 
    that I had not noticed in the other code but notice in the other one we made a 
    spaceship object and notice that numCrew is a varaible but when we use the list 
    notation notice that we passed in numCrew as a string this was something that I had 
    not noticed I was passing this in as a variable and that was wrong to do something else 
    that I wanted to mention was notice that we created a reference functon in it what 
    we are going to be doing is taking in two parameters the first parameter is going 
    to reference the objectName and the second parameter is going to reference the key 
    value within our function what we do is that we are getting the object and then 
    have list format and getting the key value.
*/

console.log();

let propName = "Active Mission";

const isActive = spaceship['Active Mission']

console.log(spaceship["Active Mission"]);

console.log(isActive);

/*
    * So here this is simple but we declared a variable that is referencing a 
    key value and what we do is that we declare another variable that is going 
    to be holding the key value but its doing list index and getting the key 
    value and we then print using the list index and we print using the variable. 
*/