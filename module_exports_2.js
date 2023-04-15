module.exports = {
    specialty: "Roaster borger",
    getSpecialty () {
        return this.specialty
    }
}


/* So here lets examine what is going on the first thing that we need to know is
that we are working with different files and we understand directories the second 
thing that we need to know is that we are using module.exports and in JS we need 
to export thing as a module meaning that a module is a collection of function so here 
we use module.exports and after the = sign its going to be what we are going to be 
exporting and in this case its going to be an object which has a key and value and 
then a function that represent that key and gets its value something right off the 
bat that we ned to know is that when it comes to the module.exports we have the {}
and what this does is that its saying that export this as a module */

