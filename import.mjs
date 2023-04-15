/* * In ES6 module syntax also introduces the import keyword 
for importing objects  */

import Airplane from "./export_default_practice.mjs"

/* * The keyword Airplane specifies the name of the variable 
    to store the default export in  something that I wanted to 
    mention here is that notice we are importing the object from the 
    file path */

const displayFuelCapacity = () => {
    Airplane.availableAirplane.forEach(element => {
        console.log(`Element Name: ${element.name} \nElement fuelCapacity: 
        ${element.fuelCapacity}`);
    });
}

displayFuelCapacity()

/* * So here the first thing that I wanted to mention was that we are using the 
    .mjs what this does is that when you run into a import error and the code is 
    not working there something with modern JS and its not converting it and the 
    thing to know is that in order to convert it we need to use the .mjs file path 
    and the code will run 
    
    * The second thing that we need to know here is this we are importing the object 
    from the module and the loop is pretty chill we are looping through the array 
    for the key and we use the forEach loop the cool thing to know here is this 
    that we use the object.key and run a loop now each element will represent each 
    element value which is now an object so what we then do is use the .key and get 
    access to the key and its value
    
    * Overall we are learning how to import here and to do so we use the import 
    keyword and then file path that is something to be aware of here and something 
    to know is export default is saying export the object as a module that is what 
    this code is teaching */