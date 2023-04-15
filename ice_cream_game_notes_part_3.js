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
            
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
            
                setTimeout(() => {
                    console.log("Machine was started");

                    setTimeout(() => {
                        console.log(`Ice cream was placed on ${stocks.holder[0]}`);
                    
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);
                        
                            setTimeout(() => {
                                console.log("Serve ice cream");
                            }, 2000);
                        
                        }, 3000);

                    }, 2000);

                }, 1000);
            
            }, 1000);

        }, 2000);

    }, 0000);
}

order(0, production)


/*
    * The first thing that we are doing is using our knoweldge of APIs here and the 
    thing that we need to be aware of here is simple notice that when we use a lot 
    of setTimeout within each other we are going to be going through a callback 
    hell alot of the videos explained this concepts using regualr function and it 
    didnt make sense why? this code makes it clear 

    * So we are going to be shifting towards our production function here we need to know
    that this works similar to a pyramid where the outter block is going to work first 
    and then the inner setTimeout is going to run with fruit being chopped then its 
    going to be each element in our array then its going to be the machine was started 
    then its going to be the ice cream was place on so its really important to understand 
    that logic here that our outer ring is going to be starting first then inner ring then 
    inner ring then so on and so forth and this is what it means to be callback hell
*/