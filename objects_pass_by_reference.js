/* Objects are passed by reference this means when we pass a variable assigned to 
an object into a function as an argument the computer interprets the paramter name 
as pointing to the space in memmory holding that object as a result function which 
change object properties actually mutate the object permanently */

const spaceship = {
    homePlanet: "Earth",
    color: "Silver",
    disabled_prop: true,
};

let PaintIt = obj => {
    obj.color = "glorious gold"
};

// Prior to calling to function
console.log(`Prior to calling function color: ${spaceship.color}`);

// Calling to function
PaintIt(spaceship);

let x = spaceship.color
console.log(`After calling function color: ${x}`);
console.log("________");




console.log();
console.log();
/* So here lets examine what is going on we create a spaceship object in it we give two 
keys one is called homePlanet and the other is called color the other thing that we are 
going to be doing is that we are going to be creating a function called PainIt and in it 
we are going to be passing in an obj and then we run the key and change it so when we call
the paintIt function and pass in an object what ends up happening is that we are changing 
the value of the function from Silver to Glorious Gold I like to think of these as kira 
functions they are manipluators that is something to be aware of here */

let spaceshipz = {
    homePlanet: "Earth",
    color: "red"
};
let tryReassignment = obj => {
    obj = {
        identified: false,
        "Transport type": "flying",
    },
    console.log(obj);
}

x = tryReassignment(spaceshipz)

console.log(x);
console.log(spaceshipz);

/* So lets examine this code more in detail we created a spaceshipz object and in it we 
gave it a key and value the next thing that we did was that we created a function called 
tryReassignment and stated one obj within the function we then used parameter object 
and stated key and values to it and then proceeded to display that obj what we then tried 
was to reassign the obj and we passed in the obj spaceshipz to the obj parameter value and 
the thing to consider here is that when we are passing in the obj to the function
in the other one it was being changed why becuase we were calling proper keys and reassign 
the values here notice that we are defining the obj and it sounds dumb but it doesnt make 
sense to change it like this that is something to be conisderate about */


let spacehshipzss = {
    "Fuel Type": "Turbo Fuel",
    homePlanet: 'Earth',
};

const greenEnergy = obj => {
    x = obj["Fuel_type"] = "avocado oil";
    console.log(`Within the function Fuel Type key has a value of 
    ${x}`);
    obj.homePlanet = "Mars";
};

console.log("________________");



// After passing to function
greenEnergy(spacehshipzss)

console.log(`After passing to function: ${spacehshipzss["Fuel Type"]}`);
console.log(`After passing to function ${spacehshipzss.homePlanet}`);
console.log("________________");



console.log(spaceship.color);
console.log(spaceship.disabled_prop);
console.log(spaceship.homePlanet);


const remotelyDisable = obj => {
    obj.disabled_prop = false
}

remotelyDisable(spaceship)

console.log();
console.log(spaceship.color);
console.log(spaceship.disabled_prop);
console.log(spaceship.homePlanet);

/* So here lets take a look at what is going on here its really simple we are creating 
methods which are changing the obejct value by using the keys that something to take in
here something new that i learned here was that when it comes to this code when we use 
.notation and say if the thing isnt inside the the {} we have to use this . notation 
and when it comes to it not being there and we use bracket notation its not going to 
create it its going to say it dont exist that was something new that I leanred here */