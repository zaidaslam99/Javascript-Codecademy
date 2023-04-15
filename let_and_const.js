// Declare a variable that contains a list.
let condiments = ["ketchup", "Mustard", "Soy Sauce", "Sriacha"];

// Change the first element within the list.
condiments[0] = "Mayo";

// Display.
console.log(condiments);

// Change the list.
condiments = ["Mayo"];

// Display
console.log(condiments);


/*
    * So here we assigned a list to a variable called condiments using the let 
    keyword we then changed the first value of the list changing the first element 
    we than displayed that list and then we changed the list completley and than 
    displayed the list

    * Something new that I learned in this code was that when it comes to changing the list 
    we dont have to use the let keyword I thought that each time we declare a vairable we 
    have to use the let keyword rather that is not the case instead what we do is that we 
    just use the variable we dont have to define it each time.
*/


const utensils = ["Fork", "Knife", "Chopsticks", "Sporks"];


utensils[3] = "Spoon";

console.log(utensils);

utensils = ["This wont work"];


// This gives us an error...
console.log(utensils);

/*
    * So here lets take a look at what is going on the first thing that we need to know is 
    that we are making a list and then changing the first element of hte list and then we
    display the list when we use the let keyword we can change the list entierly and when we 
    use the const keyword we can change the list but we cant create a new list using that const 
    variable it will gives us an constant error
*/