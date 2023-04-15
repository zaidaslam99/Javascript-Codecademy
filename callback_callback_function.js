console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data.");
        callback(
            // pass in an object to parameter
            {userEmail: email, 
            userPassword: password})
        }, 1500)
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(["Video 1", "Video 2", "Video 3"])
    }, 2000);
}

const user = loginUser("Fakeemail@gmail.com", 1223123, user => {
    console.log(user.userEmail);
    getUserVideos(user.userEmail, videos => {
        console.log(videos[1], user.userEmail);
    })
});

console.log("Finish");


/*
    * So lets understand this code more in detail the first thing that we are going to be 
    doing a recap of here is this that we are creating a function in it we are passing two 
    different parameter values and then a callback function what we than do is that we call 
    a setTimeout and in it we pass a function that is going to do something in certain amount 
    of time the most important thing to understand in the code is this that when we call a 
    callback function we can pass in an parameter here so its important to understand when we 
    create the object of the function what we than do is this we pass in the function with the 
    parameter value in it and what this does is that the object that we make is now going to be 
    referecned by that parameter value.
    
    * Now within this function we have created here what we than do is simple we pass in the other 
    function that we made now its important to understand this concept here that the other function 
    that we created is also going to have a callback function as well now the callback is also 
    going to be having an arguement value and what we do is that in order to access this value we 
    use the same function where we have a parameter value stored with our function so that it can 
    access the argument value in the callback function now the real question is when are we going 
    to be using this type of logic what is it used for?

    * The answear to that is really simple that being we can create the object and within that object 
    what we can than do is that we can pass another function in it the function that we craeted and 
    notice that we are using a callback functions by doing it this way we can run a function after a 
    set amount of time and the other thing that we can do is access different attributes in a function 
    when it comes to working within functions wihtin functions and this is due to the nested functions 
    that is something to be aware of here.
*/