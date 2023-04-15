
import { getSpecialty } from "./module_exports_2";

/* * So lets begin to understand this code the first thing that I wanted to 
mention here is that at first this code seemed kind of intimidating where I was 
like what is going on here but its really simple what we are saying is that hey 
import the getSpecialty function from the file path this is so much easier to 
understand instead of setting to a variable using the require path something to 
be considerate about here */


const Menu = require("./module_exports_2")

console.log(Menu.getSpecialty());

/* So here lets examine what is going on the first thing that we need to know 
is that when it comes to exporting we use module.exports and when it comes to 
importing we use the require and we set it to a variable which we then can use 
to access the methods or properties */



