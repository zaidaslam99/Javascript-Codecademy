const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
}

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => 
                inventory[item[0] >= item[1]]);
                if (inStock) {
                    resolve("Thank you your order has been"
                    + "processed")
                } else {
                    reject("we are sorry your order has not"
                    + " been processed because some items" +
                    " have been sold out")
                }
        }, 1000);
    })
};




export {checkInventory}


/*
    * Lets examine what we know here we started with an 
    object called inventory the next thing that we did was 
    that we created a function called checkInventory now 
    this function is going to take in a parameter and its 
    going to return new Promise in which we pass an anonymous 
    function and within that function we pass in a setTimeout
    now within that setTimeout what we do is we are running 
    the .every() 

    * So earlier we covered some notes on .every() and now 
    this code makes more sense what we are doing is that we
    are using our function parameter and this is going to be 
    taking in the object and that object.every() then the 
    item which is going to stand for each key of the object

    * now to be honest the middle part of the code is hard 
    to understand that how are they using every on the inventory 
    object first and foremost but whatever the condtion evaluates 
    say true then its going to run the resolve block else false
    its going to run the reject block.



*/