/* Getters are methods that get and return the internal properties of an object but they can 
    do more than just retrieve the value of a property */

const person = {
    _firstname: "John",
    _lastname: "Doe",
    get fullName(){
        if (this._firstname && this._lastname) {
            return `${this._firstname} ${this._lastname}`
        } else {
            return "Missing a first name or a last name."
        }
    } 
}

person.fullName;

/* Here lets examine what is going on we create an object called person and in it we used 
    wrote two different properties one is called _firstname and the other is called _lastname 
    we then specified a function called fullName in it we stated a conditonal statement 
    saying that if true for the first name and true for the last name then what we want to 
    do is return the first name and the last name else we are going to be returning a string 
    that is going to say one of the condition is false notice that we didnt have to stated if 
    _firstname = true or the second part _lastname = true we just said it as it is this goes 
    back to our pythnoic way of doing things where we are saying if true or flase that is 
    something to be considerate about */

/* So another thing to be considerate about here is this that notice that we are using the get
    function and that being we are getting the fullName function we wrote get and usually in 
    python you have to write get with name but here you dont have to use the constructors here 
    notice we called the object variable and then we called the function fullName without 
    the use of () usually when we call functions we have to use the () when working with 
    getters we dont have to follow this rule this is something to be considerate about here
    In general getter methods dont need to be called with () it looks like we are access the 
    properties */


const robot = {
    _model: "1E78V2",
    _energyLevel: 100,
    get energyLevel(){
        if (typeof(this._energyLevel) === "number") {
            return (`my current energy level is ${this._energyLevel}`)
        } else {
            return (`System malfunction: cannot retrieve energy level`)
        } 
    }
};

console.log(robot.energyLevel);

/* So here this code is going over everything that we learned how we make the varaibles 
    private and then we use the get and we use the typeof operator on attribute here and 
    if its number then it returns the formatted string else it returns a message elsewise 
    something that I wanted to mention was that when it came to return I used the {} and it 
    was giving me an error when we worked with created function within object underneath 
    parameters we used {} and here in conditional we used the () this is something to be 
    aware of here when calling getters or setters we dont need () */