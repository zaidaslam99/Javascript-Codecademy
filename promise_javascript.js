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