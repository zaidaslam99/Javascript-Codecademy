/* * So JS supports require() and module.exports however there is a 
way to do this more easier and more readable they are broken down to 
two techniques default exports and named exports  */

let Menu = {};

export default Menu;

/* * Export default uses the JS export statement to export JS object functions 
    and primitive data types
    
    * Menu refers to the name of the Menu Object the object that we are setting the 
    properties on within our modules 

*/

const airplane = {
    availableAirplane: [{
        name: "Aerojet", fuelCapacity: 800}, {name: "Skyjet", fuelCapacity: 500}]
};

