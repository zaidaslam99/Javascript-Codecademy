/*
    * So the first thing that you need to know when it comes to factory functions 
    is that its a function that creates objects and returns them
*/

function factory() {
    return {}
}

function personFactory(name) {
    return {
        talk(){
            return `Hello I am  ${name}`
        }
    }
}

/*
    * So here lets examine this more in detail somthing that I wanted to 
    point out hereis that we create a factory function and in it we are 
    than going to return and object in that object we are going to be 
    passing a function called talk and then all its going to do is 
    returning the arg that we are going to give it
*/

const me = personFactory("Sina")
console.log(me.talk());

const ben = personFactory("Ben")
console.log(ben.talk());

// Log what is inside the function
console.log(personFactory());

/* 
    * So lets examine what is going on here the first thing that I wanted to 
    mention here was that when we create a factory function ideally what we are 
    trying to do is not have someone override the function its more so of a 
    default function that you can use so this function since its more so of a 
    default function means that anyone can use it that is something to be aware of 
    here we can create multiple objects 
*/