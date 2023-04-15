const vactionSpots = ["Tokoyo", "Kyoto", "Chicago"];

const animals = ["Grizzly Bear", "Sloth", "Sea Lion"];

for (let i = 0; i < vactionSpots.length; i++) {
    const element = vactionSpots[i];
    console.log(element);
}

console.log("___________________________________________");
/*
    * So the thing that made this loop different from the other loop 
    is that we are going to be looping through an array and that is different 
    because we have each element the other is based on the amount of iterations 
    that there are where we are printing the index this time we are using the 
    array to get the length of it and then using each index value with array to get 
    each element value something cool that which is a side note is that when it comes 
    to this it used to look so confusing like what are they doing? this wasnt something
    that I was taught like now its simple its just coding with variable declaration really.
*/

for (let i = 0; i < vactionSpots.length; i++) {
    const element = vactionSpots[i];
    console.log(`I would love to vist ${element}`);
}


console.log("BIIIIIIIIIIIICCCCCCCCCCCCHHHHHH");
for (let i = 0; i < vactionSpots.length; i++) {
    console.log(`I would love to vist ${vactionSpots[i]}`);
}


/*
    * So here I wanted to ellobarte more on what is going on these codes are both going to be
    doing the same thing the first is that they are starting from 0 index to the length of the 
    list and then they are incrementing what we did in the first one is that we got each element value 
    and then stored it to a variable and then we logged that variable with back ticks the second thing 
    we did was that we wrote the element value directly with back ticks really that is about it when it 
    comes to looping through arrays.
*/