/*
    * A construtor function is nothing but a function that creates objects for us another 
    logic that you need to understand when it comes to working with constructor function is 
    this that 
     
*/

function Person(name) {
    this.name = name
    this.talk = () => {
        return `Hello I am ${this.name}`
    }
}

const sina = new Person("Sina")
const ben = new Person("Ben")
const sam = new Person("Sam")

// Show the properties of the function 
console.log(sina);
console.log(ben);
console.log(sam);

/*
    * Here I wanted to mention that we are using a constructor function 
    where the logic is simialr to a factory function now the other thing 
    that I wanted to mention here is that the best way to think of this 
    is as something that is dry texting where we are putting the basic 
    information and its getting the results that is something to be 
    aware of here
*/