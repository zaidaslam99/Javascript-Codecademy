/* Sometimes you will want a class method that arent available in individual 
instances but that you can call directly from class */

class Animal {
    constructor(name){
        this._name = name;
        this._behavoir = 0;
    }

    static generateName(){
        const names = ["Angel", "Spike", "Buffy", "Willow", "Tara"];
        const randomNumber = Math.floor(Math.random() * 5);
        return names[randomNumber]
    }
}

console.log(Animal.generateName()); 

/* So here lets examine what is going on here we created the Animal class and in it 
we passed a constructor with the name parameter and then we used this to initialize 
it we then created a method called generateName and in it we passed a list called 
names which has random names then we generated a ranom number and return the list 
at a random index and logged the output */

// This will give us an TypeError
const tyson = new Animal("Tyson");
tyson.generateName()

/* So here you might be wondering what is the purpose of doing this and the answer 
to that is really simple sometimes we are working with methods that are going to be 
specialzied only for a certain class and not for the instance of the class now the 
thing to take away from here is this that when doing this what we do is we run 
a method on this class Animal but when we cerate an isntance of the class we cant 
run that method because it exist only for the main class that why we use the static 
method that is something to be aware of here */