function ShowLoading(params) {
    console.log("1. Loading screen appeared");
}

// function hideLoadingScreen(params) {
//     console.log("4. Loading screen hidden");
// }

function getDataFromAPI(callback) {
    console.log("2. Start pulling the data");
    setTimeout(() => {
        console.log("3 Finished pulling data");
        callback();
    }, 2000);
}

ShowLoading()
getDataFromAPI(() =>{
    console.log("4. Loading screen hidden");
})

/* 
    * Here lets examine what is going on so what we want is that we want 
    our function to be displayed at the end after setTimeout has finished and 
    not before so what we are doing is that we are passing in a parameter 
    called callback and what this is going to do is that its going to act as 
    the vessel to our function so what we are doing is using that parameter value 
    and then passing in the () so when the user types in a function it than 
    goes into the ()  

    * So we talked about how callbacks are basically variables that hold the value
    so that a function can be put in it that is the first thing to consider here 
    the second thing that we can also do is that instead of declaring a function 
    we can pass the function directly using an anonymous function so notice apart 
    from the code that has been commented our here what we are doing is that we are 
    are passing in the function using a callback really essetintally we are saving 
    a bookmark value and in it we are passing in the function so that it runs in that 
    particular spot so essentailly callback functions are more so that hey I need to 
    run this function after we execute the log statment.

*/