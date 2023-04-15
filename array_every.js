const isBelowThreshold = (currentValue) => currentValue < 40;

const array = [1, 310, 39, 29, 10, 15]

let x = array.every((currentValue) => currentValue < 40)

console.log(array.every(isBelowThreshold));

console.log(x);

/*
    * So here lets examine what is going on the 
    first thing that we need to know is that we are going 
    to be creating a function in which the function is going 
    to be taking in a parameter and its going to check if the 
    value of the parameter is going to be below 40 notice that 
    we created an array and what we did was that we ran .every on 
    the array and put our function the other thing that you need 
    to know is that we arent using the function typically we are 
    using it atypically normally we would write a function and 
    then pass in the array to our function instead notice that we 
    pass the function into every.
    
    * Something that I wanted to make clear was that this is using a 
    callback function meaning that we are calling this function 
    now looking at the function below its more easier to understand 
    becasue the code can be rewritten using an anynmous function so 
    we figured out that the realionship that is between the anonymous 
    function and the parameter and its simple when we run the function 
    we have to see it as if we are running an anonymous function  
*/

const persons = [
    {
        name: "kobe"
    }, 
    {
        name: "Ivan"
    }, 
    {
        name: "Liam"
    }, 
    {
        name: "lebron"
    }
];

const results = persons.every(person => person.name !== undefined)

console.log(results);

/*
    * Here lets examine this code we created an array and inside the array we put 
    4 different objects each with the same name for key and its own value what we are
    doing is that we are passing an anonymous function into every in it we gave it a 
    parameter and notice that we are running on the object variable which either 
    contains array elements or object elements and we are checking to see that if 
    object.name is not undefined that is something to consider.

    * Something that I learned here is this when we pass in the anonymous function its 
    easier to see what is going on here because we have one parameter and this is going 
    refer to each element within the array this was something that we covered that 
    is why we are calling person.name we are able to get the keys to it that something 
    to be aware of here 
*/


