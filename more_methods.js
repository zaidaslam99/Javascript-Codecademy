const grocerylist = ["Orange juice", "bananas", "coffee beans", "brown rice", "pasta", "coconut oil",
    "plantains"]


// Removes the first item the list.
grocerylist.shift()

// Adds whatever written to the start of the list in increment order.
grocerylist.unshift("popcorn", "apples")

// This is going to slice starting at 1 up to but not including this number 
    // so in other words everything before it.
grocerylist.slice(1, 4)  

/*
    * So when it comes to array slicing there is something that you need to know
    the first number arg is where array is going to start meaning that its closed 
    and the next number is up to but not including always remmber starts and then 
    not including it so here there is something else to understand that this is not 
    going to mutate the list instead its going to create a new list that is something 
    talked about when it comes to using the const and then a list.
*/

console.log(grocerylist);

const pastaIndex = grocerylist.indexOf("pasta");

console.log(pastaIndex);

/*
    * So here we are going to be talking about index of and this is going to be getting the 
    postions of the arg that is in the list something that I wnated to mention in this code 
    was that we had addded two more things therefore the postion of "pasta" had changed now 
    the other thing that we need to know is that its going to be 0 index so counts from 0 
*/