/* * To import object stored in a variable we use the import keywords 
and include the variables in a set of {}. Another thing to know is that 
we can use these objects within our code we could object directly */

import {availableAirplane, flightRequirements, 
    meetStaffRequirements, meetsSpeedRangeRequirements} from "./export_named_exports.mjs";

/* * So here the important thing to understand is that we are calling the
object variable that is storing a list of objects we call that object 
variable we then call the variable flight requirment which is storing 
a key and value which is called requiredStaff and then we call the 
function that we created called meetStaffRequirements which is taking in
two parameter values and then working with that data */

const displayFuelCapacity = () => {
    availableAirplane.forEach(element => {
        console.log(`Fuel Capacity of ${element.name}: 
        ${element.fuelCapacitty}`);
    });
}

/* * So here we created a function called displayFuelCapacity and in it what 
we are going to to be doing is that we are going to use the object variable and 
then run a forEach loop on that object varaible and we get the name value when 
it comes to working with object.key the basic logic is that we get each element 
and then we use that element value to get each key that is something to be aware 
of here */

// Display the fuel capacity
displayFuelCapacity()

const displayStaffStatus = () => {
    availableAirplane.forEach(element => {    
        const bool = meetStaffRequirements(element.availableStaff,
            flightRequirements.requiredStaff)               
        console.log(`${element.name} meets staff requirements: ${bool}`);
    });    
}

/* * The next thing that we are going to be doing is that we are calling a 
function that is going to be looping through the array and then get each 
element value and here there is somthing that we need to know the first 
thing is that we are passing a function within a function that is the most 
important point to understand the second most important point to understand here 
is this that we are using a foreach loop that is going to be looping through the 
array and is going to get each element value after getting each element value what 
we than do is we use that element.key and put it into the function that we had 
created in this case its going to be the meetStaffRequirment() we pass in the 
parameters but it shows us how powerful the use of import and export statements 
can be not only can we import objects that are arrays or functions or objects them 
selves   */

// Display 
displayStaffStatus()

function displaySpeedRangeStatus() {
    availableAirplane.forEach(function(element){
        console.log(element.name + "meet speed range requirment: " + 
        meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, 
            flightRequirements.requriedSpeedRange));
    })
}

displaySpeedRangeStatus()

/* 
    * Within the function that we created above we use the forEach method to iterate 
    over each element in the object that we created in the list now from my understanding 
    what this code is doing is that its getting the element name the other thing that we 
    need to know is that notice how its doing so we are calling the array on the obejct that 
    we created and in the for loop we pass a function.
    
    * So not going to lie this code is slight complicated the first thing that we need to know
    is this that we are exporting two objects and we are exporting two functions the next thing 
    that we need to know is this that doing the callback function we were able to get the minSpeed 
    and the maxSpeed and we use this by using element now here is the funny thing in order to get 
    requiredSpeedRange we are getting flightRequirements.requiredSpeedRange notice that we are not 
    using element that is something to be considerate about here so my thoery is this notice that we 
    are looping through an array and for that we use the callback function after we get out the array 
    we than are just simply calling other object properties using the object.key 
    
    * The last thing that we are going to be covering here is this that when we pass the function 
    what we are doing is that we are using the element.name this is us looping through our list 
    and getting each key and using that for our funtion now here is another question to understand 
    that looping through our array we might be wondering why are we doing this? and not just do 
    obect.key and the answer to that is really simple our array as multiple object so if we did 
    object.key its going to be like wiat for which one so we have to run a for loop on the array 
    object so we can access all instances of the key properties and we can also do that using callback 
    functions that is why in the next one we use the simple technique that is something to be aware of 
    here.
*/