const robot = {
    model: "1E78V2",
    energyLvl: 100,
    provideInfo () {
        console.log(`I am ${this.model} and my current energy level is ${this.energyLvl}`);
    }
};

robot.provideInfo()

/* Here lets examine what is going on notice that we created a robot object and in it we 
    created a key and values the first thing that I made a mistake on was saying that when 
    creating key and values I forgot that the main obj is using the = sign and the inner 
    object is using the : say when it comes to creating the key and values or say if we 
    need to create an object within an object we are going to be using that */

/* The second thing that I wanted to mention was that say we need to acces the values of the 
    keys what we need to do is use the this keyword and notice by using it we can access the 
    values by using the this.key */