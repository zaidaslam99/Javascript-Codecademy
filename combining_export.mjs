let specialty = "";

function isVegi() {
    return true
}

function isLowSodium() {
    return true    
}

function isGlutenFree() {
    return true
}

export {specialty as chefsSpecial, isGlutenFree as isVeg};
// export default isGlutenFree;

/*
    * So really not much to cover we can use different export styles really that is 
    about it. Notice how we can export these functions in all their different styles  
*/

export let Menu = {};

export let lespecialty = "";
export let leisVegi = function() {
    
}
export let leisLowSodium = function() {
    
}
let leisGlutenFree = function() {
    
}
export default {leisGlutenFree, isGlutenFree};
