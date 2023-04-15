/*
    * When data stored of an object is a function we call that a method 
    a property is what an object has while a method is what an object does 
    so for example console if a global JS object and log() is a method on that 
    object  
*/

const alienShip = {
    invade: function () {
        console.log("Hello Beach");
    }
}

/*
    * So here notice that we created a variable which is going to be storing an 
    object in it we created and object key and then for the value we set it to a 
    function and this function is going to be retuning a log statement the first 
    thing that I wanted to mention was that you can set function to keys this was 
    something that I didnt really think about when it comes to Python way of doing 
    things 
*/

console.log(alienShip.invade());
console.log("________");
alienShip.invade()
console.log("________");

const alienShipz = {
    invade () {
        console.log("Yooo Beach");
    }
}

console.log(alienShipz.invade());

/*
    * Here lets take a look again we created a variable and did the same thing but notice
    that we used the () after invade and then started function this is almost like using 
    the fat arrow notation here but without arrow you might be wondering why do we do this 
    like this and the answer to that is really simple its a faster way of writting this 
    code and JS allows you to do so that is really all there is with the new ES6 we can 
    omit the colon and the function keyword

    * Object methods are invoked by appeneding the objects name with the dot operator 
    followed by the method name and ()
*/

let retreatMessage = "We no longer wish to conquer you land" + 
    "land we dont care for it"

const alienShippp = {
    retreat () {
        console.log(retreatMessage);
    },
    takeoff () {
        console.log("Yooo.... sup... ");
    }
}

alienShippp.retreat();
alienShippp.takeoff();

/*
    * So here lets examine what is going on first thing that we need to know is that 
    we first created a retreatmessage that is going to act as our default message and the 
    next thing that we do is that we create an aienShippp that is going to be the object 
    and within it we have created a key and value to that key is a function and that 
    function we are using a shorter way of writting where its key () {} start of function 
    something else that I wanted to mention here is that within the retreat key we have 
    log statement and then its going to be logging the default message something that I 
    learned was that we are creating objects in which we are mkaing function to objects 
    this is different from the pythonic way of doing things where we are mkaing the
    object in the init and then the function on the bottom here instead what we are doing 
    is making the object with functions and when we call the function so that they can 
    exectue using the object we use the name of the variable storing the object methods 
    and then method its like console.log and its important to understand when you want to 
    give more then one key and value be sure to use a coma fam its important to understand 
    that JS the key gets treated as the function this goes back to the other thing that 
    we learned how when we make a function equal to a variable that variables gets 
    treated like a function
*/
