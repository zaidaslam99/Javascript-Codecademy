const color = "Blue";

const returnSkyColor = () => {
    return color;
};

console.log(returnSkyColor());






const satellite = "The moon";

const galaxy = "The milky way";

const stars = "North Star";


const callMyNightSky = () => {
    return "Night Sky: " + satellite + " " + stars + ", and " + galaxy;
};

console.log(callMyNightSky());

/* 
    * So here notice that we are talking about global the other variables were local 
    because they were in our function these variables are outside of our function 
    what we then do is that we declare three variable something else worth mentioning
    is that we create three variable something else that I wanted to make mention of was 
    that when it comes () having one arg means that we dont need this 0 and more than one 
    means we do.
*/ 
