function orderPizza(callback) {
    setTimeout(() => {
        const pizza = "Pizza";
        callback(pizza)
    }, 2000);
};

function pizzaReady(pizza) {
    console.log(`Eat the ${pizza}`);
}

orderPizza(pizzaReady)

console.log("Call lebron");

/*
    * So here this code makes callback more clear there are two things that you need to understand 
    the first being that we created a function called orderPizza and in it we passed a callback 
    function the second thing that we did was we used the setTimeout in the function and we had 
    passed an anonymous function we declared a variable and then passed the variable to the callback 
    spot of the function its important to understand that function with the preset variable that 
    is going to run a specfic thing is going to run after two seconds 

    * the next thing that we did was that we had created a function called pizzaReady and in it 
    we had passed an arg called pizza all we did was that we logged the argument value 

    * now the next step what we did was that we passed in the second function that we had created 
    into our previous function what does this mean it means that we are going to be passing in 
    a function to orderPizza first and something important to understand here is this that we are 
    passing the function as it is and we are not passing in any arguments this is the part that 
    had confused me tbh

    * The mistake I was making was that I was seeing the code 
    very linearly that we neeed to pass in a value to function 
    so that it can run and then its going to do something so on 
    and so on rather that is not the case the best way to think 
    of this is we are playing chess we are going to be learning 
    how to play our second move first 

    * its important to understand that when we are passing in a 
    function we are passing in all its belonging to it meaning 
    that wea re passing its parameter its data that is stored 
    within the function so that when we callback that function 
    we can pass in the parameter using the callback that is 
    the piece of info that makes sense so when we pass in 
    pizzaReady its important to understand that orderPizza 
    is taking a callback function and all we are doing is that 
    we are passing in the function and what we do is that we are 
    running that function and after 2 seconds we get the results 
    and then it runs the rest of script and then it runs the 
    callback function orderPizza.
*/