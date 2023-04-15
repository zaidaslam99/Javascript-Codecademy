let prom = new Promise((resolve, reject) => {
    let num = Math.random()
    console.log(num);
    if (num < .5) {
        resolve("YaY!")
    } else {
        reject("Ohhhh nooo")
    }
});

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectedReason) => {
    console.log(rejectedReason);
};

prom.then(handleSuccess, handleFailure);

/*
    * So I think that I finally get this we create a promise here and in the promise we 
    pass in a resolve and reject and say if the condition is either or then we run a 
    resolve() and reject() the best way to think of resolve and reject are no different 
    from if else condition within a promise 

    * The second thing that we are doing is we are creating a function called handleSuccess 
    and a function called handleFailure here we pass in a function with a parameter and all 
    we do is log that parameter now here is the interesting part each function has its own 
    spot so the first one is going to be handleSuccess and the second function is going to 
    be handleFailure I think it matches the resolve and reject that is something to be 
    aware of here 
*/