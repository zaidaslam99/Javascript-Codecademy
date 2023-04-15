let stocks = {
    Fruits: ["strawberry", "grapes", "apples", "bannas"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["vanilla", "none"]
};

let is_shop_open = true;

let topping_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("which topping would you like?"))
        }, 3000);
    })
}

async function kitchen() {
    console.log("A");
    console.log("B");
    console.log("C");

    await topping_choice()

    console.log("D");
    console.log("E");
}

kitchen()

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others order");


/*
    * Here lets examine what is going on the first thing that we need to know is that we are 
    creating a stocks object in it we have keys and values where the values are arrays the 
    next thing that we do is we decalre a boolean true value we than createda function and in 
    it we passed a Promise and within the promise we passed in the resolve and what this means is 
    that the promise is going to resolve after 3 seconds we created a function called kitchen and 
    in it we are passing log statements A B C and then what we do is we use await and call the 
    function that outside and then log D and E so here when we call our function its going to be 
    A, B, C now here there is something that you need to understand when it comes to this 
    logic we know the first three log statements in the async function kitchen behave norally 
    what we than do is we call await and here anything that is out side the function notice 
    the log statements that are in the outside they are going to run and after 3 second we are 
    going to resolve and since it resolved its going to run the stuff that is on the bottom of 
    await the best way to descirbe it is that its going on a straight path then its going to await 
    and then its going outside the code and once await done it brings that up and continues going 
    down that is something to be aware of here.   
*/