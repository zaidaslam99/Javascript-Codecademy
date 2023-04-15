/* To make use of exported module and behavoir we define within the module 
we import the module into another file in node we use the require function 
to import modules */

const Menu = require('./function_notes')

Menu.getSizes(2,2,2)

/* So here lets examine what is going on this code the first thing that we are 
doing is that we are using the require for our file something else that we need 
to know is that require is a JS function that loads module its arg is the file path 
of the module */

/* the two steps that you need to know impor the module with require() and assign it 
to a local variable and then use the module and its properties within a program  */