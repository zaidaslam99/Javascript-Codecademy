/* We often want to extract key value pairs from objects and them as variables */

const vampire = {
    name: "Dracula",
    residence: "Transylvania",
    preferences: {
        day: "stay inside",
        night: "satisfy appetite"
    }
};

const residencezzz = vampire.residence;
console.log(residencezzz);

/* This is called extracting so we can do it this way to extract something we can also take 
    a simpler way to do this techqiue is called destructured assignment to save ourselves 
    some keystrokes in destrutured assignment we create a variable with the name of an object
    key that is wrapped in curly braces {} and assign it to the object this is how we have 
    been doing it thus far getting our object variable and then getting the key for that obj 
    variable so we can get value */

// Newer way of doing this simplified
const {residence} = vampire;

// Display key value
console.log(residence);

/* So here lets talk about what is going on the ES6 has a destructuring way where we can get 
    the value without having to type in all the values so what we do is that the key is going 
    between our curly braces and then the object is going to be going to the other equal 
    sign this is different because we are used to doing object.key now its more so of 
    variable{key} = object which is more easier to write in my opinion somehting that was 
    I forgot was that notice that the preference we created an object this was something 
    that we talked about earlier when it comes to making object we do {} and the we use 
    the key and values for that object meaning that there can be keys: value and then there 
    can be key: Objects*/


// Notice that we are trying to access the inner block
const {day} = vampire.preferences;
console.log(day);

/* So here we are trying to access the inner block the mistake that I made was that i forgot 
    to use the obejct variable to get to preferences but since we are trying to acces a 
    property within the preference that is within vampire we need to access it.  */