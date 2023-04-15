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

