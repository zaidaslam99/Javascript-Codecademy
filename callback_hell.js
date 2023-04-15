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

function videoDetails(video, callback) {
    setTimeout(() => {
        callback("title of the video")
    }, 2000)
}

const user = loginUser("Fakeemail@gmail.com", 1223123, user => {
    console.log(user.userEmail);
    getUserVideos(user.userEmail, videos => {
        console.log(videos[1], user.userEmail);
        videoDetails(videos[0], title => {
            console.log(title);
        })
    })
});

console.log("Finish");


/* 
    * So its important to understand the logic that is happening here the logic that is going 
    on the first thing that we need to know is that we are working with Apis what they do is 
    that they get data after a certain amount of time the other thing that we need to know is 
    that we use this method called setTimeout() in it we are going to be passing in a callback 
    function and then the time what this means is that when we create a function we want to call 
    another function in it after a certain amount of time and this is why we use callbacks its 
    basically we are reserving a function spot after a set amount of time so we created our main 
    function loginUser and in it we passed email password and callbac the next thing that we did was 
    that we used the getUserVideos and passed in the email and the callback 

    * So honestly what does this mean? the answer to that is really simple so when we call the login 
    user function say we make an object of the function whats going to end up happening here is that 
    we are going to be but before we do that we need to understand that the callback is going to be 
    having a argument within it and something that we learned is that when the callback has an arg inside 
    it we can access that using a parameter and a function so when we create the object of the function 
    what we than do is that we pass in the respected parameters and for the callback we pass in a functon 
    that is going to take in that parameter value which is than going to be referenced by the callback 
    with its parameter value and we can than access whatever is in the callback using either object 
    notation or list notation that is something to be aware of here 

    * The last thing that we didnt really cover much about here is the last part what we do is that 
    we create an object of the function and in it we can pass in the parameter for the first function 
    that we create the second thing that we can do is that we can call another function called 
    getUserVideos and in it we pass an email and callback now the cool thing here is that we can expand 
    the building block so when we are saying email we know that user referes to the object that we 
    created and we can access each element of the object using object notation the other thing that we 
    can do is than pass that object notation into the email that we created and create another function 
    something worth knowing is that when you see callback you know that you are going to be passing in a 
    anonymous function in it with a parameter value in it so that parameter value can reference the 
    property that is in the function itself so that is why we can access different parts of the function 
    just going deeper into it the reason why this is called callback hell is because it becomes hard to 
    read.
*/