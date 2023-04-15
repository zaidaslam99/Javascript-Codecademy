/* SO here its pretty simple create a main class that is going to be different 
from the sub class meaning one parent and one child class */

class Animal {
    constructor(name) {
        this._name = name;
        this._behavoir = 0; 
    }

    get name() {
        return this._name
    }

    get behavoir() {
        return this._behavoir
    }

    incrementBehavior(){
        this._behavoir++;
    }
}

class Cat extends Animal {
    constructor(name, usesLitter) {
        super(name);
        this._usesLitter = usesLitter
    }

    get usesLitter() {
        return (this._usesLitter)
    }
}

/* So here we learn some new tearms the first thing that we need to know is that 
we are extending the Cat class from Animal meaning that we are trying to use 
the methods in Animal class what we than do is pass in the constructor and 
this is similar to python way of doing this where we define a __init__ and then 
we use the word super underneath here its different thought what we do is that we 
pass in name for the Cat class this is going to be the name parameter that we are 
going to use notice how we dont have to define it here why? because we had already 
done so in our Animal class now this class has its own parameter that is not known 
in the animal class this we have to define it using the apprach that we have been
working with as for the name we can just say super(name) this means that we are 
going to be accessing the name from the super class as long as the name variable is 
the same */

const dojaCat = new Cat("Doja", "false")

// Uses the parent function methods 
console.log(dojaCat.name); 

// Returns its own Method
console.log(dojaCat.usesLitter); 