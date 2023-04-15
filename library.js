const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           let instock = order.every(item => 
            inventory[item[0] >= item[1]])
            if (instock) {
                resolve("Thank you your order was successful")    
            } else {
                reject("We are sorry your order could not be completed" +
                " because some items are sold out")
            }
        }, 1000);
    })
}

module.exports = {checkInventory}

/*
    * So lets examine this code the first thing that we need to know is that we are creating 
    an inventory object and in it we have keys and values the second thing that we do is we create 
    an checkInventory function in it we pass a parameter the other thing that we need to know is 
    that we arrepassing a promise in the function where its going to have a resolve and reject 
    parameter within the function we pass in the setTimeout. 
    
*/
