/*
    * Property assignment once we defined an object we are not stuck with 
    all the properties that we wrote objects are mutable meaning that we 
    can update them after we create them we can use dot notation or bracket 
    notation and the assignment operator to add a new key value pairs to an 
    object or to change an existing property

    * One of two thing can happen with property assignement if the property
    already exist on the object whatever value it held before will be replaced with 
    the newly assigned value if there was no property with that name a new property 
    will be added to the object

    * One important thing to know when it comes to working with const that although 
    we cant reasign an object declared with const we can still mutate it meaning we can 
    add new properties and change the properties that are there
*/



const spaceship = {type: "Shuttle"}

console.log(spaceship);

// spaceship = {type: "alien"}     // TypeError

// Assignment to constant variable
spaceship.type = "alien";

// Create a new key of "Speed" with a corresponding value
spaceship.speed = "March 5";

console.log(spaceship);

/*
    * So lets examine what is going on here notice that we are creating a spaceship object
    and what we then do is that we assing it a key and value the next thing that we are 
    going to be learning about how to change the value to a key and its similar to use 
    of python where we declare the object.key = value and where we can label the new 
    value the first thing that we need to know is that we created a const variable that 
    is holding the details to the object that is important to know the commented out 
    section that say TypeError we declare a variable that is then making the object 
    which is holding key value but this variable is already refereing to a constant the 
    next thing we do is we can override a const when it comes to working is that we can 
    reassign but can mutate meaning that we can change it but not over ride it seems rather 
    contradictory the next thing that we do is we use the value speed which is the key 
    and change that so when we log the object we get so to SUMMARIZIE we are modifying 
    our object with a new value and we are adding a new key and value.
*/ 

const spaceshipz = {
    "Fuel Type": "Turbo Fuel",
    homePlanet: "Earth",
    mission: "Explore the universe",
    "Secret Mission": "Discover life outside the Earth" 
};

delete spaceshipz.mission;

console.log(spaceshipz);

/*
    * So here we are learning how to use the del keyword and the thing to take away 
    from here is that all we are doing is using del and then the object and its respected 
    key and that gets rid of the key and value this was something that we had covered in 
    python as well 
*/

spaceshipz.color = "Glorious Gold"
spaceshipz.numEngines = 10
delete spaceshipz['Secret Mission']

console.log(spaceshipz);

/* 
    * So here we reassinged an object key added a new key value and then 
    we deleted a key value this was similar to the stuff we did using python
*/
