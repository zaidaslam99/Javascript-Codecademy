let stocks = {
    Fruits: ["strawberry", "grapes", "apples", "bannas"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["vanilla", "none"]
};

let is_shop_open = true;

let order = (time, work) => {
    
    return new Promise((resolve, reject) => {
        
        if (is_shop_open) {
    
            setTimeout(() => {
    
                resolve( work() )                
    
            }, time);

        } else {
    
            reject(console.log("Our shop is closed"))
        }   
    })
}

order(2000, ()=> console.log(`${stocks.Fruits[0]} was selected`))

.then(() => {
    return order(0000, ()=>{console.log("Production has started")})
})

.then(() => {
    return order(2000, ()=>{console.log("The fruit was chopped");})
})

.then(() => {
    return order(1000, ()=>{`${stocks.liquid[0]} and ${stocks.liquid[1]}`})
})

.then(() => {
    return order(1000, ()=>{console.log("Start the machine");})
})

.then(() => {
    return order(2000, ()=>{console.log(`Ice cream was placed on ${stocks.holder[0]}`);})
})

.then(() => {
    return order(3000, ()=>{console.log(`${stocks.toppings[0]} was selected`);})
})

.then(() => {
    return order(2000, ()=>{console.log("Serving the ice cream");})
})

.catch(() => {
    console.log("Customer left");
})

.finally(() =>{
    console.log("Day ended shop is closed");
})

/*
    * So here lets examine what is going on its important to understand that we 
    are working with thenables the important how the code is working first 
    we created an object that is storing the keys and values the values being 
    an array of elements the second thing that we did was that we had declared 
    a boolean value that said true we than created a function called order and in
    the function we passed time and work parameter one of the parameter is going to 
    a callback function the next thing that we did was we resulted a new Promise 
    and in it we passed resolve and reject what we then did was that we passed the 
    if condition with the boolean value and if true we are going to be calling the 
    setTimeout function and in it we run the resolve which is going to be the callback 
    function after a set amount of time which is the parameter and then in our else 
    block we ran the reject which logged our shop is closed.

    * The next thing that we are doing is that in order we pass the time and then the 
    function that is going to be going into our callback we know that we can pass async 
    function and in those anonymous functions that are going to be doing something here 
    its important to understand the concept of then what this does is that we can use 
    then and after this runs what we are going to do is run this and we pass in 
    the order function and the time and the async function and we do the same thing 
    again then the time and anonymous function when we are using .catch its going to 
    work for our reject clause and when we use finally its going to refer both the 
    reject and resolve overall we learned how this code is different when it comes to 
    working with callbacks when there are so many callback it can become reduant to 
    have to look through each of them using .then we use still use callback logic but 
    the thing that we are doing different is that we are just passing the anonymous 
    function into it. Something important to understand is .then is more so of like 
    hey do this next it not really like calling that function back in it we passed order 
    and then time parameter and anonymos function and those function and parameter are 
    predeined with a callback in the function itself .then is more so a bridge of 
    logic that is used to do the next thing.
*/