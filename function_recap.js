// // Anonymous Functions 
// const sayHello = function () {
//     return "hello"
// }

// // Callback functions 
// let func = setTimeout(() => {
//     console.log("whats up"); 
// }, 1000);

// // calling the callback function notice 
// // that we are not passing in any constructors ()
// func

// // Named function
// function Sayhello() {
//     return {}
// }

// // Named function
// function Person(n) {
//     this.name = n    
// } 

// // Object methods
// const me = {
//     sayHello: function () {
//         return "hello"
//     }
// }

/*________________________________________________________________________________________________ */

// const sayWhatsup = firstName => {
//     return `Hello ${firstName}`
// }   

// const sayWhatsdown = firstName => console.log(`Hello ${firstName}`);
// sayWhatsdown("Zaid")

// /* 
//     * So lets examine what is going on here the first thing that we need to know 
//     is that we are working with anonymous function the second thing that we 
//     need to know is that notice in the first function we are rerittting it a rule 
//     of thumb being that when you only have one line you dont have to use return or 
//     the {} so after that arrow notice that we didnt pass the {} after the => that is
//     something new that I learned.
// */

/*________________________________________________________________________________________________ */

// Working with Arguments

// const sayHello = function() {
//     console.log(arguments);
// }

// sayHello("Zaid", "Kira", "Light")

// /* 
//     * So there is this thing called arguments that we use when it comes to working 
//     with function notice that in this function we didnt really pass in args in here 
//     like didnt give the parameter value instead what we did was we used arguments 
//     what this does is that when we call the function and pass in arguments to the 
//     function even thought we didnt decalre their parameter its going to take the 
//     arguments that we passed in and put them in an array so that is something that 
//     you need to be aware of here this ideaology doesnt work when it comes to 
//     working with arrow functions.
// */

// const sayBye = () => {
//     console.log(arguments);
// };

// sayBye("Zaid", "Kira", "Light")

// /*
//     * So lets examine this code when we use the arguments when it comes to the arrow
//     function we need to know that it doesnt put the parameters to an array that is 
//     something to be aware of here.
// */

/*________________________________________________________________________________________________ */

// How not to write arrow function

// sayHello() => {
// }

// /*
//     * So here lets talk about arrow functions more and the thing that we need to 
//     know is that we cant create an arrow function like this not going to lie 
//     this is something that I would do where I would write the arrow function 
//     name the () and then the {} that is something to be aware of here. arrow 
//     functions are anonymous function you cannot have named arrow functions
// */

/*________________________________________________________________________________________________ */

// const me = {
//     talk: function () {
//         return "hello"
//     }
// } 

// console.log(me.talk()); 

// const Zaid = {
//     talk: () => {return "Hello Z"}
// }

// console.log(Zaid.talk()); 

// const someone = {
//     talk: () => "One line rule"
// }

// console.log(someone.talk());

// /*
//     * So here lets examine this code more the first one we create an object and in it 
//     we pass key and value as the value we are passing a function now notice in the 
//     second one we are passing an anonymous function and its going to return a 
//     {} so it shows that we can make a value using the function keyword or using 
//     the anonymous function. The last thing that we need to know here is this 
//     that notice in the anonymous function someone its using the one line rule 
//     that when we are trying to return a line we dont have to use the return and the 
//     {} 
// */
 
/*________________________________________________________________________________________________ */
