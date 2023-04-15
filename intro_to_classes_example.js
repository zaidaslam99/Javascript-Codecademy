class Dog {
    constructor(name){
        this._name = name
        this._behavoir = 0;
    }

    get name(){
        return this._name
    }

    get behavoir(){
        return this._behavoir
    }

    incrementBehavior(){
        this._behavoir++;
    }
}

// Create a new object called halley 
const halley = new Dog("Halley");

/* Something else that we are going to learn is the new keyword this is creating a new Dog 
    class object and all we do is create the variable that is going to be then used as the 
    object of the class variable and new reference that we want a new one created from my 
    understanding then we call the class and pass in the parameters */

// "Halley" goes into name
console.log(halley.name);

// Displays 0
console.log(halley.behavoir);

// Increments 1 
halley.incrementBehavior();

// Displays name 
console.log(halley.name);

// Displays 1 
console.log(halley.behavoir);

/* So here lets compare this to the other thing that we learned we first created the halley 
    object and in it we gave it two different keys followed by their values and we had two 
    different methods overall the code was similar to everything that we learned.
    
    * Now what we did was that we craeted a Dog class in it we passed constructor(name){} 
    and the thing to take away from it is that this is similar to the __init__ where we 
    are getting the initalizer overall this is following the same thing that we learned 
    just thing to know is that we can have a Dog class then the constructor then what para
    meter its going to take and the key and value and we can access those key and values 
    using the this keyword */