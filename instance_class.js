/* An instance is an object that contains the property names and methods of a class 
but with unique property value */

class Dog {
    constructor(name){
        this.name = name;
        this.behavoir = 0;
    }
}


const halley = new Dog("Halley")

// Outputs "Halley"
console.log(halley.name);

/* We use the new keyword to generate a new instance of the Dog class the new keyword 
    calls the constructor() runs the code inside of it and then returns the new instance 
    we pass 'Halley' string to the Dog constructor which sets the name property to 'Halley' 
    this gives us a hint that when we use the word new and if we dont use new then it says 
    that constructor cannot be invoked with out the use of new */

