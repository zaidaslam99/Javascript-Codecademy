console.log("Start");

function loginUser(email, password) {
    setTimeout(() => {
        return {userEmail: email}
    }, 1500)
}

const user = loginUser("Fakeemail@gmail.com", 1223123);
console.log(user);

console.log("Finish");

/* 
    * Here lets examine what is going on in the first line we are logging start 
    in the second line we created a function called loginUser and here its taking an 
    email and password within our function we called the setTimeout function and within 
    it we passed an anyonomous function and its going to return an object we than passed 
    in two different arguments within the loginUser and then we logged "Finish" now here 
    there is something else that we need to know what is this code trying to prove?

    * Its showing us that say we want data when the user enters something and we are getting 
    the data late so when the code is running we learned how this is storing something to an 
    api and that is basically holding our callback function and the data is coming after like 5 
    seconds and by then the code is already running these are some problems that we encounter 
    when we are working with async code another thing to know is that not all callback code is 
    going to be running afterward some run just like sync code 

    * So here there is something to understand when it comes to working with the settimeout function 
    now this is a function that is going to be taking in a function in this case anonymous function 
    which is going to return something after a certain amount of time its important to understand 
    that this function is used so we can offset a function so thats why we create this main function 
    that is going to be taking in the email and password and its going to be using those parameter 
    which is our settimeout function within our main function so we can access those parameter and then 
    create an object using those parameters  
*/

 