function ShowLoading(params) {
    console.log("1. Loading screen appeared");
}

function hideLoadingScreen(params) {
    console.log("4. Loading screen hidden");
}

function getDataFromAPI(params) {
    console.log("2. Start pulling the data");
    setTimeout(() => {
        console.log("3 Finished pulling data");
    }, 2000);
}

/* 
    * So lets take a look at this code here notice that we are 
    creatig a function and within the function we are calling a 
    function now the logic of this code is really simple the fist 
    function is going to run then its going to be the second console 
    log statement in the getData function and then its going to be running
    the hideLoadingscreen because the log within the hide is going to 
    run and the setTimeout which is in getData is going to hold in the 
    invisible APi for two seconds

    * Something interesting that I learned here was when it comes to this code 
    is what is happening so say we want to retrieve something from the Api 
    first we are going to have the loading screen then what we are going to 
    be doing is pulling the data from the api the finish pulling the data and 
    then we are going to hide the loading screen now that we understand this logic 
    we need to understand what is going on here we called the setTimeout function 
    because when it starts pulling the data we want it to wait then pull data 
    then hide screen since JS works linearly what we need to know is this 

    -- Results
    - Loading screen appeared 
    - Start pulling the data 
    - Loading screen hidden 
    - finished pulling the data

    * This is what is happening when we run the code the way its supposed to be and 
    say if the user clicks a button and we have to fetch data from the API what ends 
    up happening here is this that we are not going to be going in the order that we 
    need to how do we fix this with the use of a callback look to callback_functions_more_two.js 
*/

ShowLoading()
getDataFromAPI()
hideLoadingScreen()
