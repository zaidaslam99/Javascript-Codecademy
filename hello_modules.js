/* JS modules are reusable pieces of code that can be exported 
from one program and imported for use in another program */

// Create the object 
let Menu = {};

// Add properties or methods 
Menu.specialty = "Burgers"

// Export the module 
module.exports = Menu

/* So every JS file run in Node has a local module object 
with an exports property used to define what should be exported 
from the file so lets examine this code 

* In the first line what 
we did was we created an empty object. 

* Now in the second line Menu.specialty is defined as a property of 
the Menu module we add data to the Meny object by setting properties 
on that object and giving the proerpties a value 

* We store "Burgers to Menu.specialty 

* module.exports = Menu this exports Meny object as a module module is a 
variable that represents the module and exports exposes the module as 
an object 

* module.exports = Menu; exports the Menu object as a module module is a 
variable that represents the module and exports exposes the module as an 
object 

*/


