let stocks = {
    Fruits: ["strawberry", "grapes", "apples", "bannas"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["vanilla", "none"]
};

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("Shop is closed"))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.Fruits[0]}`);

        await time(0000)
        console.log("Start the production");

        await time(2000)
        console.log("Cut the fruit");

        await time(1000)
        console.log(`${"Start the machine"}`);

        await time(2000)
        console.log(`Ice cream was placed on ${stocks.holder[0]}`);

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`);

        await time(2000)
        console.log(`Serve the ice cream`);

    } catch (error) {
        console.log("Customer left", error);
    } finally {
        console.log("day ended shop is closed");
    }
}

kitchen();


/*
    * Lets examin what is happening in this code the first thing that we need to know is that 
    we are creating a stocks object and in it we are passing key and value the value is going 
    to be an array here we declare a boolean variable called trye and what we do is that we create 
    a function called time and in it we are passing ms within our function we are going to be 
    passing in a Promise and in it there is going to be resolve and reject if the 
    conditon is true then what we are going to do is pass in a setTimeout function and in it we are 
    going to be passing in resolve and time else we are going to reject it so here is my thoery as 
    to what is happening here we are creating a function and in it we are passing so here is my 
    theory as to what is happening here we know that we are passing resolve into our setTimeout 
    function and later on in the code all we are doing is passing in the time we really are not 
    passing in anything else so my thing is that setTimeout is going to resolve and in it all we 
    are doing is specifying the time for instance say if we put resolve() with the construcotor 
    what this means is this we want the output of the function and not the function itself 

    * Lets go and explain the async function its called kitchen and in it we are using try catch 
    and finally within it we are using await and then the time function that we created and then 
    we are putting the amount of time its important to understand that we are using time as a 
    bookmark when it comes to using await so its almost like we are time stamping and we want the 
    function to run with the time and then what should happen. The video states that we are trying 
    to make a relationship between our time and work when we are passing in resolve I think what is 
    happening is simple that we are "passing" in to resolve in an indirect way its like saying that 
    hey when I pass in the time resolve this like automatically bypass it so its like going to get 
    resolved no matter what unless the boolean variable is set to false. 
*/