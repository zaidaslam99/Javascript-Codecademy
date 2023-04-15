/*
    * There are two way to access properties the first way is dot notaion

*/  

let ship = {
    homePlanet: "Earth",
    color: "Silver"
};

console.log(ship.homePlanet);
console.log(ship.color);

/*
    * So here lets examine what is going on the first thing that we need to know is that 
    we are using the name of the object that we created in this case its called ship and 
    then we use that object and then its key so here notice that we do is ship.key and it 
    gets the value this is similar to pythonic way of writting if you try to access a 
    property that dont exist it returns undefined.
*/


let spaceship = {
    homePlanet: "Earth",
    color: "Silver",
    "Fuel Type": "Turbo Fuel",
    numCrew: 5,
    flightPath: ["Venus", "Mars", "Saturn"]
}


const crewCount = spaceship.numCrew
console.log(crewCount);

const planetArray =  spaceship.flightPath
console.log(planetArray);

/*
    * So here there was something that i wanted to mention what was going on the first 
    thing to know here is that we created a variable that is storing the the value to the 
    key that we listed here so take a look at this code the first one is self explanatory
    the second one the thing that I wanted to mention here is that when it comes to the 
    array we can store it as a value and then store it into a variable that is something 
    that we leanred in python as well just a refresher
*/