/* So far we been createing object individually but there are times where we want to create
    many instances of an object quickly here is where factory functions come in a real world
    factory manfactures multiple copies of an item quickly and on a massive scale. A factory 
    function is a function that returns a object and can be reused to make multiple object 
    instances factory function can also give parameters allowing us to customimze the objects
    that get returned */

const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        name: name,
        age: age,
        energySource: energySource,
        scare(){
            console.log(catchPhrase);
        }
    }
};

/* So here lets examine whaat is going on we created a factory function and from 
    my understanding is that its like a blue print so when you create multiple 
    monster objects we can create using thi function right off the bat notice that 
    we are using standard function notation where we set the function parameter and 
    reference it a variable the reason why we reference to a variable is so we can use 
    this variable later on and then we do fat arrow notation here the next thing that we 
    do is return the value as the parameters and the key are set as the same variables 
    its cool that JS allows us to return the values this is something to be aware of here 
    we then return a function within the function so notice the scare function that is 
    inside the monsterFactory function and the scare function  */



const ghost = monsterFactory("Ghouly", 251, "ectoplasm", "800!");

// Returns 800!
ghost.scare()

/* Notice how we created the reference variable and stored the object of that function 
    so now ghost references something that is something to be considerate about */

    