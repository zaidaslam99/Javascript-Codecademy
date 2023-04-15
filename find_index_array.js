/* 
    * We sometimes want to find the location of an element in an array that where the 
    findIndex() method comes in calling .findIndex() on an array will return the index of the 
    first element that evaluates to true in the callback function.
*/

const jumbleNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbleNums.findIndex(x => {
    return x < 10;
});


console.log(lessThanTen);

/*
    * SO here lets examine what is going on the first thing that we need to know is that we are making 
    a list that has 5 different elements and what we than do is that we use the findIndex method on the 
    list what this does is that it checks which index does the condition inside our function evaluates 
    to true and in this case our funtion we put return x < 10 so then this is going to check each element 
    and now that since 5 is less than true its going to evaluate to true andits going to get the index 
    of that element something that I wanted to mention here is that when it comes to this code we could have 
    written this using conditonal statement saying if x is less than 10 then we get that positoning to x or 
    something like that but sometimes we are given scenerio where we need to get the first index now really 
    all the index when it evaluates to true that is something to be aware of here.

*/

const greaterThan1000 = jumbleNums.findIndex(x => {
    return x > 1000;
});

console.log(greaterThan1000);
console.log();

/*
    * So here there was something that I wanted to mention when it comes to working with thefindIndex method 
    something that you need to be aware of here is that say if we wanted to check a condition that doesnt exist 
    in out list for example the scenerio that we created above no each number is going to be greater than 1000 
    so instead what its going to do is return -1 this means that it didnt find anything.
*/


const animalzz = ["hippo", "tiger", "sealion", "seal", "monkey", "monkey"]

const foundAnimal = animalzz.findIndex(x => {
    return x === "monkey"
})

console.log(animalzz);
console.log(foundAnimal);
console.log();

/*
    * SO here there is something that I wanted to mention the first that we are creating a list that has 5 different 
    element in it now what we are trying to do is that we are trying to see when the element is equal to mokey and 
    are storing that value like that index to the variable called foundAnimal here there was something that I wanted 
    to demonstrate notice that we had used monkey twice the reason being that I wanted to demonstrate that its going 
    to store the first occuerence the other thing that we need to know is that the findIndex is different from the 
    iteratiors because they would iterate through the list and get whatever we needed say which conditon it passes and 
    make a list and store the new element to the new list here the thing that we need to know is that we are going to 
    be getting the index value and now that variable is holding a number value that is something to be aware of here.
*/

const findLetter_s_index = animalzz.findIndex(x => {
    return (x[0] === "s") 
})

console.log("First letter S down below");
console.log(findLetter_s_index);


/*
    * So here lets examine what is going on what we are doing is that we are saying that if x[0] === "s"
    or the first character for each element is equal to s then we are going to return it to the variable that 
    we created and we log that variable value that is something important to understand

*/