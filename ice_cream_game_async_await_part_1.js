let stocks = {
    Fruits: ["strawberry", "grapes", "apples", "bannas"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["vanilla", "none"]
};

let is_shop_open = true;


let order = () => {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve()
        } else {
            reject()
        }
    })
}

async function order() {}

/* 
    * Lets examine what is going on here so here we are learning what makes 
    async and await different from promises and the answer is really simple 
    notice in the first order function we are creating a promise using 
    functions all that can be bypassed we can create a function called order 
    and in it we use the async keyword and what this does is that we can 
    create the promise we dont have to use everything that we see in the 
    first order function
*/