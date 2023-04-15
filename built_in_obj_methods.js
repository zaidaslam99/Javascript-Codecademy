/* So earlier we have been creating instances of objects that have thier own methods but we 
    can also take advantage of built in methods for Objects we have access to instance methods 
    like .hasOwnProperty() .value() there are also useful object class methods such as 
    Object.assign() Object.entries() and Object.keys() */

const robot = {
    model: "SAL-1000",
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
}

// Use documentation for this
// stores a list of keys 
const robotKeys = Object.keys(robot);

// Use a for loop to loop through list to get each element
for (const iterator of robotKeys) {
    console.log(iterator);
}

// console.log(robotKeys);
console.log();

for (const [key, value] of Object.entries(robot)) {
    console.log(`${key} : ${value}`);
}


console.log();

const robotEntries = Object.entries(robot)

console.log(robotEntries);

/* So lets examine what is going on thus far the first thing that we need to know is that 
    we created an object that is calld robot we gave it some key value pairs we then 
    use the documentaion to see how Object.keys() is used what we than do is we pass in the 
    object to the Object.keys method and this basically puts the keys in a list we than use 
    a for of loop that loops through the list that we created and it display each of the 
    index its important to turn to the documenation where we can know which loop we are using 
    and why we are using each loop the next thing that we do is that we use the Object.entries 
    and to understand this we have to read the documenation and what it does is that it shows 
    how to write this code and it gets the key: value paris from the object using the for 
    of loop we than use the robot.Entries and it use a different format of writting and it
    writes the code in a way where it stores each key and vale in the list that is something 
    to be considerate about. */


// The object.assign() methods copies all enumerable own properties from one 
    // or more source to a target object. It returns the target object
const newRobot = Object.assign({}, robot, {laserBlaster: true, voiceRecognition: true})

console.log(newRobot);

/* So here there is something that you need to know we are using object.assign and 
    this is a method that helps us reassign an object properties in the earlier example 
    we use a reference object and then we use the object that we want to compare to now 
    here we did something new we created a new object within the object.assign and then 
    we use the refernce object as the robot this is going to be the object that is going 
    to be used as reference meaning that its going to change if there are element in this 
    object that match with our source obejct and in this case what we do is that we passed 
    in an object that has two different parameters in it and once we did that this reference 
    object called robot is going to check the values and if they match with the soruce then 
    its going to change its important not to get intimated by this once you understand that 
    we can use different object methods so we can modify them and get data then thing become 
    more easier to comprehend and alot of this was used with the documentation that is 
    also something that you need to know*/