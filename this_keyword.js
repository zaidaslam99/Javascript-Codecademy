/* Objects are collections of realted data and functionality we store that functionality 
in methods on our objects */

const goat = {
    dietType: "herbivore",
    makeSound(){
        console.log("Baaaa");
    }
}

goat.makeSound()

const goats = {
    dietType: "herbivore",
    makeSound () {
        console.log("Bana");
    },
    diet () {
        console.log(this.dietType);
    }
};

// This will give a reference Error
goats.diet();


/* So lets examine what is going on here we created the goats object and here we stated the 
    key as the dietType and then we created a function notice when we call the function to
    the first code that we wrote we simply just ran the function to the object that we had 
    created the second thing that we did was that we created an object and then we created 
    the function makeSound() and then the function diet() now notice that we ran the code 
    object variable and then ran the diet in it and it gave a refernce error and that being 
    because deitype is define as the key and the value but when we created the new function 
    it was not showing up in this function that we created*/

/* Here where the this keyword comes to the recuse if we change the .diet() method to use 
    the this. the diet() works! the this keyword references the calling object which 
    provides access to the calling object properties in the example above the calling obj
    is goat and by using the this we are accessing the goat object itself and then the 
    dietType property of goat by using property dot notation */

/* Here lets exmaple this code now we ran this code using the this. and what this does is
    that it allows us to access the key value the thing that I wanted to iterate here is 
    that notice when we created the dietType: its an object that has key and value its 
    not x = y so what we do is we create  the diet function and then we can access the value 
    using the this keyword.*/