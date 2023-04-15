function robotFactory(model, mobile) {
    return {
        model,
        mobile,
        beep() {
            console.log("Sup Beaches");
        }
    }
}

const newRobot = robotFactory("P-1501", false)
console.log(newRobot.model);
console.log(newRobot.mobile);

/* Notice how we rewrote this factory function where we got the model and mobile as 
    the parameter value and then we got the funtion overall really simple much more easier 
    to write.*/    