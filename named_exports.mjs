/* * Named exports a second common approach to export modules in addition 
    to export default named exports allow us to export data throguh the use of 
    variables  */


    let specialty = "";
    
    function isVegi(params) {
        
    }

    function isLowSodium(params) {
        
    }


    export {specialty, isLowSodium}

// Rule of thumbs.

/* * When we use named exports we are not setting the properties on 
    an object each export is store in its own variable 
    
    * specialty is a string object and while the function blocks are 
    object in the form of funtion recall that every function is in 
    fact a function object 
    
    * export {specialty, isLowSodium}; exports objects by their variable 
    names notice export keyword is the prefix 

    * specialty and isVeg are exported while isLowSodium is not exported 
    since its not specified in the export syntax 
*/
