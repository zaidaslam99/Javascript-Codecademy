let prom = new Promise((resolve, reject) => {
    let num = Math.random()
    if (num < .50) {
        resolve("Yay")
    } else {
        reject("Ohh noooooooo")
    }
});

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
}

const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
}

prom.then(handleSuccess, handleFailure)

/*
    * Lets break down what is happening here the first thing 
    that we need to know is that that we are creating a new 
    Promise in it we pass the resolve and reject and then 
    establish the base conditon and its respected path 

    * The second thing that we need to know here is this 
    that we create handleSuccess and handleFailure these are 
    going to be two functions that we are going to be using 
    and what they are going to be responsible is logging 
    the parameter value 
*/