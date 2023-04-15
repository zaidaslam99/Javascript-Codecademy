/* JS is an object oreiented programming language we can use to model real world items 
in this lesson you will learn how to make classes classes are a tool that the 
developers use to quickly produce similar object  */

let halley = {
    _name: "Halley",
    _behavoir: 0,

    get name(){
        return this._name
    },

    get behavoir(){
        return this._behavoir
    },

    incrementBehavior(){
        this._behavoir++;
    }
} 

/* So here lets look at what we did we created a object called halley and in it 
    we passed in two keys one is called the _name and the other is called _behavoir
    its cool cuz now everything that we learned we are applying it here something that 
    I wanted to mention when it comes to working with get is I didnt pass in the () other 
    wise if it was a regular function then yea we would have to */

// Display 0
console.log(halley.behavoir);

// Icrements 1 
halley.incrementBehavior()

// Displays 1 
console.log(halley.behavoir);