let availableAirplane = [
{
    name: "AeroJet", 
    fuelCapacitty: 800, 
    availableStaff: ["pilots", "flightAttendants", "engineers", "medicalAssistance",
    "sensorOperators"]
}, 
{
    name: "SkyJet", 
    fuelCapacitty: 500, 
    availableStaff: ["pilots", "flightAttendants"]
},
];

let flightRequirements = {
    requiredStaff: 4
};

const meetStaffRequirements = (availableStaff, requiredStaff) => {
    if (availableStaff.length >= requiredStaff) {
        return true
    } else return false
}

export {availableAirplane, flightRequirements, meetStaffRequirements};