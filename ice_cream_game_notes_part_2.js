let stocks = {
    Fruits: ["strawberry", "grapes", "apples", "bannas"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["vanilla", "none"]
}

let order = (fruit_name, call_prod) => {
    
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
        call_prod()
    }, 2000);

};

let production = () => {

    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log("Fruit has been chopped");
        }, 2000);

    }, 0000);
}

order(0, production)

/*
    * So lets examine what is going on here this makes API more clear notice that in 
    the production function we are using two setTimeouts at first I was like wait a 
    minute why are we doing this? and its simple we know that in order we are 
    passing in an index value and a function and when we go the function we are 
    using the function that we passed in as a callback function going to run after 
    the log statement so lets go that function in it we gave a setimeout which runs 
    after 0 seconds and then we inside it a log statement that is going to run and then 
    another setTimeout which is going to run after 2 seconds so first its going 
    to be the fruit being selected and then the production happening and then the 
    fruits being chopped when I saw this code I was like oh this code now makes sense 
    and I can understand how APIs work 
*/