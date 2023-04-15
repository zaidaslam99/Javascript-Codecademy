/*
    * So there is something to know when it comes to working with objects 
    and that is JS has seven fundemental data types and six of them are the 
    primitive data types string, number, boolean, null, undefined, and symbol
*/

let spaceship = {};

/*
    * So this is called an object literal we use curly bracees to desiginate 
    object literals we fill an object with unordered data the data is organized 
    into key value pairs a key is like a variable name that points to a location 
    in memmory that holds a value

    * A key value can be any data type in the language including functions or other 
    objects we make a key value pair by writting the key name or identifier followed 
    by a colon and then the value we separate each key value pair in an object literal 
    with a comma keys are strings but when we have a key that does not have any special 
    characters in it JS allows us to omit the quation marks

*/


let ship = {
    "Fuel Type": "disel",
    color: "Silver"
};

/* So here lets examine what they did they created an object called ship and notice that 
    it was given two key and coresponding values the first key the thing that you need to 
    know is that its written as Fuel Type and it has its value called disel and the second 
    thing worth knowin is that the second key is called color and notice that this is a 
    variable that is called color and notice that it has its value its important to 
    understand that keys can be string values or variables that reference 
*/


let fastership = {
    "Fuel Type": "Turbo Fuel",
    color: "Silver"
}