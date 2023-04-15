const Airplane = {
    availableAirplane: [
        {
            name: "Aerojet", 
            fuelCapacity: 800
        }, 
        {
            name: "Skyjet", 
            fuelCapacity: 500
        }
    ]
};


export default Airplane



// airplaneFuntion(){console.log(`First Inedex: ${availableAirplane.name[0]}`);}

/*  * So there is something to mention here notice that we have our object and then 
    we have our list and in our list we have more objects that are stored something 
    else that I wanted to mention was that when it comes to working with nested object 
    wihtin list be sure to indent and do spacing like this it makes the code easier to 
    read 

    * Another thing to understand is that in order to access our internal key and 
    values we are going to use the object and then the list value for the key then 
    we are going to use our forEach loop that is something to be considerate about here 
*/