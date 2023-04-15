/* * Export also conveniently offer a way to change the name of variables 
when we export or import them we can do this with the as keyword  */

let specialty = "Loser";
let isVegi = () => {
    return true 
};
let isLowSod = () => {
    return true 
}

export {specialty as chefsSpecial, isVegi as lovesVegi, isLowSod}

/* * The as keyword allowssus to give a variable name as the alias as 
    demonstrated in the example above 
    
    * Since we dont give isLowSod any alias we just take it as it is
    
    * The last thing that I wanted to mention when it comes to this code is 
    this that really we are talking about things that we have covered such as 
    using export {} and how we can export variables and methods now we are 
    simply learning that the things that we are exporting we can use alias this 
    is something to consider when writting this code.
*/