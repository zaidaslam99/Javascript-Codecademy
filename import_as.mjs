/*
    * To import named exports aliases with the as keyword we add the aliased variable in our
    import statement
*/

// import { chefsSpecial, lovesVegi } from "./export_as.mjs";

// console.log(chefsSpecial);
// console.log(lovesVegi());

/* * Here there is something that I wanted to mention we are omporting a variable 
    here and then we are importing a function now the thing to take away from all 
    this is that we can use the log and then get the value of our variable and we 
    can use the our method and get the value of our method now the other thing to 
    know here is this that we had used the constructor here to ran the function  */

import * as Carte from "./export_as.mjs";

console.log(Carte.chefsSpecial);
Carte.lovesVegi()
Carte.isLowSod()

/* 
    * Here lets take a look at what is going on here the first thing that we need 
    to know is this that when we use the * this means that we are importing 
    everything the second thing that we need to know is that we are making an alias 
    called Carte and from the file path the best part about this thing is that we 
    can use this object variable and then call on each of the variables and the 
    methods which I found to be pretty cool when it comes to this.
*/