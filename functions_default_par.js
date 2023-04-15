function greeting(name="stranger") {
    console.log(`Hello, ${name}`);
}
// Ouputs stranger
greeting()

// Change stranger value 
greeting("Zaid")

// Display it 
greeting()


 /*
    * One thing that was added in ES^ is the ability to use default 
    parameters they allow parameters to have a predetermined value in 
    case there is no arg passed into the function if arg is undefined
    when called here what we did was that we gave a default value to a 
    parameter. Now here the thing that I wanted to make mention of was that
    we can have a default value in this case we put stranger and then we changed 
    the value by getting another arg the first time that we ran the function 
    the second time we didnt pass in an arg and in the first time we are going 
    to be over ridding the function and in the second time we are going to be running 
    the default value that was already stored to the function so this is similar to 
    python when you can set a parameter to a certain value something else that I wanted 
    to mention was that this function is used as default value meaning that its going to 
    run a default message unless specfied otherwise. 

 */


function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`item one is ${item1}`);
    console.log(`item two is ${item2}`);
    console.log(`item three is ${item3}`);
}

makeShoppingList()

/*
    * So here the thing that I wanted to itterate here was that in the first line what we dd was
    that we used default parameters and something that I did was in python you can pass parameter 
    as string as they set to each para value you dont have to specify that it is a variable that is 
    storing these parameter here when i tried passing in 3 different strings to each of the parameter 
    value it was acting up and giving me an issue so then I learned that you need to specify the var
    and then its value that is something to be aware of here.
*/