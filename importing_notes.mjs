// import { playGuitar } from "./notes_on_exporting.mjs";
// import { shredding as shred, 
//     plucking as fingerpicking} from "./notes_on_exporting.mjs";

// console.log(playGuitar());
// console.log(shred());
// console.log(fingerpicking());

/*
    * So here we learn importing the module is simple to 
    understand here we are importing the function from the 
    file path something else that I learned was that when 
    it comes to importing and alias I was like why do we need 
    to do that and the answer to that is really simple say 
    if there are two developers who are working and import the 
    two different function with same name it can get confusing 
    so instead we use the alias system 
*/


import * as Guitars from "./notes_on_exporting.mjs"

console.log(Guitars.playGuitar());
console.log(Guitars.shred());
console.log(Guitars.fingerpicking());


/*
    * So here its simple to understand you are importing 
    everything as an alias and then you are going to use 
    the Guitar module and then run a function on it only thing 
    that you need to know here is that if you use export 
    default then its not going to work that is something 
    that you need to be aware of here
*/