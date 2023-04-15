/*
    * So now we are going to be talking about iterators and they are 
    basically for loops they iterate over things one tool that we have 
    is a for loop in JS we have iteration methods which are referred to as 
    iterators they are methods called on arrays to manipluate eleents and 
    return values.
*/

const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach(artist => {
    console.log(artist + "is one of my favourite artists");
});
console.log();

/*
    * So take a look at this code the first thing that we did was 
    that we had created a list that has different elements the second thing 
    that we did was that we used that list and then called an iterator method on them 
    and after that we gave it an argument which I am assuming is that variable that is 
    going to be holding the reference at that given point which is for x in range() 
    this variable acts like the x the other thing that i noticed was that we had used 
    the fat arrow notation and we then printed each variable with a string this was a new 
    way to write this. Here the thing that I wanted to mention that we are using the forEach method
    here notice that we are running a method on our original list and we are not storing that to 
    a variable.
*/


const numbers = [1, 2, 3, 4, 5]

const squareNumbers = numbers.map(number => {
    return number * number;});

    // This is outside the loop
    console.log();
    
    console.log("This is outside the loop");
    
    console.log(squareNumbers);
    
    console.log("__________________________________________");
/*
    * So lets take a look at this code the first thing that we did was that we created a list 
    of numbers the next thing that I wanted to mention was that we created a variable and then 
    stored the value to that makes sense we then called the list and ran the map method where 
    we gave each parameter value as number and all we did was return number * number something else 
    that I wanted to mention here is that we had used log statement wihtin the {} and the second thing 
    that we did was that we used it outside the {} when its in the {} the loop is running and when it is 
    outside the {} it ends the loop that is something important to be considerate about when it comes 
    to working with this code. Something that I wanted to add to this code was that when it comes to the 
    squareNumbers this is going to be the variable that is going to be holding the list and each element 
    squared that is something important. Here the difference is that we are storing the list to a new 
    variable and you might wonder why? well the answer is really simple it cuz we are modifying our 
    list and then storing to a variable that is something important to understand.
*/

const random = ["Desk", "chair", 5, "backpack", 3.14, 100]

const onlyNumbers = random.filter(x => {
   return typeof x === "number";
});

console.log(onlyNumbers);

/*
    * So here lets talk about what is going on the first thing is that we created a list called random 
    and then we put in 5 different elements in it the next thing that we did was that we are now using a 
    random method this is a iterator on the list we are going to be iterating thru the list and then we 
    use the x which I learnd is checking wheter if x is a number something that we had to recap on was 
    that the typeof operator is basically checking if a value is true or false and I think from my understanding 
    we state that "number" means that if it is a number int or float value the mistake that I made was that 
    I was thinking that its going to find the value number and return that rather that was ot the case its 
    basically returning true or false if an element value is equal to a number value Something that I wanted to 
    mention was that here we are going to be returning the list into another variable called onlyNumbers into it 
    the other thing that I had realized when it comes to this code is that we are parsing our list faster so we 
    are getting all the numbers and then putting them in to our list notice how in this code we also store the 
    by products of new list to a variable that is something else to consider.
*/
