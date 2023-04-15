console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data.");
        callback(
            // pass in an object to parameter
            {userEmail: email, 
            userPassword: password}
            )
        }, 1500)
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(["Video 1", "Video 2", "Video 3"])
    }, 2000);
}

const user = loginUser("Fakeemail@gmail.com", 1223123, user => {
    console.log(user);
    getUserVideos(user.userEmail, videos => {
        console.log(videos);
    })
});

console.log("Finish");

/*
    * So here we talked about how we have a problem when it comes to working with async 
    function now its important to understand terminology between async and callback function
    one is a style the other is a function that we create so we talked about how we had 
    created an object called loginUser and then passed in the parameters here now what we did 
    was that we passed in a parameter called callback now what this means is that when we create 
    the object of the class we are going to pass in a function when we pass in the email and password 
    so take a look at this code what we did next was that we created a functionn called setTimeout and
    then created an anonomoys function and in it we had a log statement and then the callback({}) and 
    gave it a key and value.
    
    * So here I wanted to mention what was goin on the part that was new we are introducing a callback 
    parameter and in the function that we created called setTimeout() we pass a anonomoys function and in 
    it we had a log statement displayed and then the callback which I made a mistake on I was thinking that 
    it meant a specific term that is used in JS rather that was not the case its acutally going to be the 
    parameter value and in it we passed in an object with a key and email as the value. So what does this 
    function do? my theory is this we are creating a function and then in the function that we have set 
    as argument we pass in user to the parameter of the function and we use log.object.key 

    * So there is something new that I learned when it comes to this code the first thing that I wanted 
    to mention was that in our callback there is an object that is stored the first important thing to 
    understand is that we are passing in a function when we create the object of the function in our other 
    example what we did was that we passed in a function to our callbacin callback_function_more.js 
    here notice that we have an object in the callback so my theory is this that when we created a object 
    of the function what we did was that in our callback we passsed a function and we passed a parameter 
    this is equivalant of saying so my theory is this that when we pass in the object now user is 
    basically going to be  referencing the entire object now you might wonder why well its really simple 
    to understand that we are passing in a function with a parameter value so when we call the callback 
    we need to specifiy it as a function and then we need to pass in the arguement so when they are 
    creating an object in the callback() its basically saying hey here is the function and its going to 
    be taking in the argument that is something to look out for when it comes to this code.

    function noName(user){}
*/ 