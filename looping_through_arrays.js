/* Loops are programming tools that repeat a block of code until a condition is met 
we learned how to iterate through arrays using their numerical indexing but the key 
value pairs in objects arent ordered so when it comes to list you have to understand 
that there is a index value in each and when it comes to objects you have to understand 
that there is no index value and to loop through it we have to use the for in loop which 
is a new loop that we are going to learn.*/

let spaceship = {
    crew: {
        captain: {
            name: "Lilly",
            degree: "Computer Engineering",
            cheerTeam () {
                console.log("You got this!");
            }
        },
        "ChiefOfficer": {
            name: "Don",
            degree: "Aerospace Engineering",
            agree() {
                console.log("I agree cap");
            }
        },
        medic: {
            name: "Clementine",
            degree: "Physics",
            announce () {
                console.log("Jets on");
            }
        },
        translator: {
            name: "Shauna",
            degree: "Conservation Science",
            powerFuel () {
                console.log("The tank is full!");
            }
        }
    }
}  

for (const crewMemmber in spaceship.crew) {
    console.log(`${crewMemmber}: ${spaceship.crew[crewMemmber].name}`);
}

/* So here we created a spaceship object and wihtin it we have a crew object and then
it goes to 4 different sub units and we are getting the name degree and then we are 
writting a function to the object important to understand when writting function we 
use the fat arrow notation here though we dont have to since we are working with 
functions when working with function and object we dont have to use the exat fromat 
we can abbrievate here. */

/* So lets talk about the for in loop now this loop is used to iterate over object 
variables something that I wanted to talk about is how this loop works notice that 
after the for const crewMemmber this is the variable that is going to refernce each 
branch here so each brach is the head of the snake object in this case its going 
to be the cap object the Chief officer object the medic and translator so its important 
to understand that the for in loop is going to be targeting each of the head of the 
object its important to understand the format we use the main object the branch 
object and I think what we are doing is that once we establish what branch we want we
want the crewMemmber is something that gets used as eaceh sub object and then notice 
how we are displaying the object head and then what we do is to access each value in 
the object we use the bracket notation and then we do the path to get to the name which 
its going to be mainobject then sub obejct notice that crewMemmber is in bracket notation 
this is also because we have a string as well so we cant simply just type in a string 
into the [] then we use the key to get the desired value */

let earthship = {
    crew: { 
        Cap: {        
            name: "Lilly",
            degree: "Computer Engineering",
            cheerTeam () { "Yout got this!"}
        },
        "Chief Officer": {
            name: "Dan",
            degree: "Aerospace Engineering",
            agree () {
                console.log("I agree to this");
            }
        },
        medic: {
            name: "Clementine",
            degree: "Physics",
            announce () {
                console.log("Jets on");
            }
        },
        translator: {
            name: "SXZhauna",
            degree: "Computer science",
            powerFuel () {"The tank is full!"}
        },
        Kira :{
            name: "Zaid",
            degree: "NA",
            message () {"I am kira"} 
        }
    }
}
console.log();

for (const role in earthship.crew) {
    console.log(`${role}: ${earthship.crew[role].name}`);    
}

console.log();

for (const key in earthship.crew) {
    console.log(`${earthship.crew[key].name}: ${earthship.crew[key].degree}`);
}

/* So earlier we talked about working with objects in JS and now the thing to know here 
    is that we can create an object and within that object we can have another object that 
    then can be divided into many different objects within this sub object we have many 
    different object that each have thier key and values something that we were learning 
    was that say we need to get the key and value for these objects wihtin object what 
    would we do? and the answer to that is really simple we would use the for in loop this 
    allows us to loop through a specific object and and then get the key and value so lets
    examine the for in loop the first line is say for x in main.obj and then crew the sub
    obj and now you might be wondering what is it that we are trageting that is something 
    important to consider when it comes to working with this and the answer to that is really 
    simple we need to target the sub sub object within the object so we can access the 
    key and the values that is why we are using the for in loop its going to be getting the 
    key and value for each the next line that we are writting is going to be doing referenceing
    the sub object and then we are getting the using the second part to access the value 
    so we are using the sub sub objects which is going to be referenced by the role and then 
    we are going to access the keys so in essence we are trying to get the key within the 
    object of the object and then we are going to get the value once we get the reference 
    there is something that I realized when it comes to this code and that being when we 
    display the value of role it prints out the object variable now I dont know if it is 
    string or variable to be sure but what i do know is that its dipslaying the words as 
    they are so that is something to be aware of here. */

/* So lets take a look at the next part of the code what we did was that we looped through
    our objects again and this time we got the name and degree something that I wanted to 
    mention when it comes to this is that notice the format of this we are using the bracket 
    notation here 
*/