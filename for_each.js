/*
    understanding logic when it comes to fat arrow and looping through 
    list.
*/

grocery = ["apple", "carrots", "pears"];

grocery.forEach(element => {
    console.log(element);
});

console.log();

function Grocery(element) {
    console.log(element + "yoo");
}

grocery.forEach(Grocery)

/*
    * Here we are going to talk about the fat arrow function more the first thing that we need to 
    do is make a list and in the first one we are using the forEach in fat arrow mode and then we label 
    x or each iteration of each element and then we printed each element this is one way of doing things 
    the other way is this where we create a function called Grocery and its weird but here is what is going 
    to happen from my understanding we do our grocery list which has a list of elements then what we do is 
    we pass in the function that we created and its going to store an element value so we are doing list and 
    that goes in to our Grocery. 

    * So we are going to be doing some recap notes to summarize this first and foremost we create functions
    which take in parameter and args and then we can say parameter plus whatever we are writting we can then 
    use iterators and pass in our list.iterators(Function) the important thing to understand is that when we 
    pass in a function to our iteratos we have to declare an element in the function that we create and thus 
    doing so what happens is that instead we can use the list and fat arrow notation because we learned that when 
    it comes to writting function we dont have to create a function using the => and element goes before it 
    its almost like we dont need to write the word function or anything and just element and then the start of 
    the function and close the funtion.
*/ 

console.log();

const fruits = ["mango", "papaya", "pineapple", "apple"]
 
const x = fruits.forEach(element => {
    console.log("I want to eat " + element);
});


