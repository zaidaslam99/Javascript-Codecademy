/* * Named exports are also distinct in that they can be exported as soon as they are 
declared by placing the keyword export infront of variable declariton */

// export let specialty = ""
// export function isVegi(){};
// export function isLowSodium(){};

 let availableAirplane = [
    {
        name: "AeroJet", 
        fuelCapacitty: 800, 
        availableStaff: ["pilots", "flightAttendants", "engineers", "medicalAssistance",
        "sensorOperators"],
        maxSpeed: 1200,
        minSpeed: 300
    }, 
    {
        name: "SkyJet", 
        fuelCapacitty: 500, 
        availableStaff: ["pilots", "flightAttendants"],
        maxSpeed: 1200,
        minSpeed: 300
    },
    ];
    
    let flightRequirements = {
        requiredStaff: 4,
        requriedSpeedRange: 700
    };
    
    const meetStaffRequirements = (availableStaff, requiredStaff) => {
        if (availableStaff.length >= requiredStaff) {
            return true
        } else return false
    };
    
    const meetsSpeedRangeRequirements = (maxSpeed, minSpeed, requiredSpeedRange) => {
        const range = maxSpeed - minSpeed;
        if (range > requiredSpeedRange) {
            return true
        } else return false
    };

export {availableAirplane as aircraft, flightRequirements as flightReq, 
    meetStaffRequirements as meetStaffReq, meetsSpeedRangeRequirements as meetSpeedRangeReqs}; 

/* 
    * So here the first thing that I wanted to mention was that we are creating an object 
    that is taking in a list with multiple objects notice there are two objects in our list 
    and we than have 3 different methods to make the data types complex we can have objects 
    that are in list that each key can have a list. The next thing that we did was that we 
    created two different functions and they are taking in different parameters the thing that 
    I wanted to highlight here is that we are using the export on each method and then the object 
    that we created I was thinking that if we export the object it was going to export everything 
    rather what we have to do is export each of the method that we created along with the object 
    even though the method are created within the object that is something to be considerate about 
    here.
    
    * So we learned two new things the first being that we can use the export statement on eaceh 
    line of code now we are learning that we can just use the alias and export them we already covered 
    when it comes to the use of export {} but notice that we are doing the alias now.

*/