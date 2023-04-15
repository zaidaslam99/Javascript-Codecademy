/*
    * So we are going to be talking about the reduce method which is .reduce() 
    this method returns a single value after iterating through the elements of an 
    array thereby reducing the array 
*/

const numbers = [1, 2, 4, 10];

const squaredNums = numbers.reduce((acc, currentvalue) => {
    console.log(acc, currentvalue);
    return acc + currentvalue
})


console.log(squaredNums);

/*
    * So the first thing that we are going to be talking about is what this code is doing 
    notice that we have a list that has 4 elements and what we do is we are calling the reduce 
    method so what reduce is doing it sounds like making the list smaller or subtracting rather 
    that is not the case instead its going through each element in the list and making the list 
    smaller not really subtracting so notice that in this code there are two parameter values we 
    understand that when it comes to looping we label this as the element my theory is this that 
    when we label two value it causes the loop to go faster because now the acc stands for 1 and 
    and the currentvalue stands for 2 and when you add that it becomes the acc so in the first 
    iteration it does this at least in the second iteration what we do is that the acc becomes the 
    output of acc + currentvalue and the next currentvalue becomes the next element that is in the 
    list and so on and so forth this code is simialr to writting code using pythonic way but its weirder 
    to write ngl 

    * Something that you need to know is that reduce() method can also take an optional second parameter 
    to set intial value for accumulator 
*/

const numlist = [1, 2, 4, 10];

const summedNums = numlist.reduce((ac, cv) => {
    return ac + cv
}, 100)

console.log(summedNums);

/*
    * So here lets take a look at what is going on the first thing that we need to know is 
    that we are creating a numlist that has 4 different elements and then what we do is that we 
    are using the reduce method here we are taking in the ac and cv value these are two parameters 
    which we learned that ac is going to reference the first number and cv is going to reference the 
    second number in the list its going to add them and that is going to be ac next value the next 
    number is going to be cv in the list this is what is known as initial accumulation meaning that we 
    are going to add both of them togehter to get the loop started this is different from doing it the 
    pythonic way something else that we learned was that we can incorporate anthoer number that we can 
    add  to  this and its going  to be 100 so when reduce is done its going to get  a value that is 
    in the list and its going to add it with a 100 therefore its going to be 117 that is something to be 
    aware of here something else that we need to know is that reduce takes a second argument and that is 100 so 
    in the first arg we have accumulating through the list and the second arg is basically the 100 so when 
    its done accumulating its going to be adding to the 100 that is something to be aware of here.
*/

/*
    * So here something that I made the mistake was that I was thinking that its going to be adding the 100 at 
    the end rather that is not the case its going to be starting with a 100 and then add 1 and we get 101 and 
    then it adds 101 + 2 and it gets 103 and it adds that to next so on and so forth its important to understand 
    that when it comes to this code the 100 is the initial run value meaning that the number is going to be 
    starting from there that is something important to understand the mistake that I made was thinking that 
    it dont start from there. 
*/
console.log();

const new_numbers = [1, 3, 5, 7]

const newsum = new_numbers.reduce((acc, next_num) => {
    console.log("The value of accumulator: ", acc);
    console.log("The value of currentValue: ", next_num);
    return acc + next_num
}, 10)

console.log(`The total is going to be: ${newsum}`);

/*
    * SO here this code makes it clear and the thing that we need to know is that notice 
    that our first element is the acc the second element is 3 the best way to understand this
    code is think of for loops we used to put a total and then we looped through our list and 
    added each element to our total and when doing so we were accumalting the numbers the same thing 
    is going to be happening here what we are doing is that we are adding to total where we get the 
    first number and the next add them together and it becomes the accumualted value but the first 
    element start of as the accumulated  number that is weird it makes sense cuz in the other for 
    loop the first element being added is going to add as well so that is something to be aware of here 
    as well

    * So here when we started the iteration with a preset value all it did was add each element from the 
    list to our number and when numbers reduced to 0 then it gave a total that is all to remember when it 
    comes to this code.
*/

console.log();

const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

console.log("Checks to see if word length is below 6");
console.log(words.some((word) => {
    return word.length < 6;
}));
console.log();
/*
    * So here lets take a look at what is going on we gave a list and what we are doing is that 
    we are using the some method and are returning the words.length if its less than 6

*/

const interestingWords = words.filter(ele => {
    if (ele.length > 5) {
        return ele;
    }
})

console.log("InterestingWords Variable down below");
console.log(interestingWords);
console.log();

/*
    * Now we are going to be talking about the filter and what this is doing is that its getting the 
    list that we created and each elemenet it will return if the legnth of the element is less than 5
*/

const isBelowThreshold = (currentValue) => currentValue < 40

const array1 = [1, 30, 39, 29, 10, 11];

console.log("isBelowThreshold");
console.log(array1.every(isBelowThreshold));
console.log();
/*
    * So here there is a different value of doing this notice that we used the fat arrow notation 
    without the {} this was new for me because I was wondering why arent they using the {} notice 
    that we create a function and then pass in a parameter value and state if the parameter is < 40 
    so important thing to know is that our function is checking to see if x < 40 and when we use the 
    every method notice that we to pass in the array and then we use the name of the function this 
    is something smart cuz we can then create a function that checks something and pass our function 
    into every and then use dot notation on our list and then its going to be looping through and checking 
    to see if condition is true something else that I learned was that we give it a specification that is why 
    we dont use the {} if you read the doc then it explains how to write the code using it.
*/
console.log("Checks if length of word is less than 5 for InterestingWords");
console.log(interestingWords.every((word) => word.length > 5));

/*
    * So here lets take a look at what this code is doing is that its checking to see if each element in the 
    list is less than 5 something that I wanted to make mention here is that in the other list that we did was 
    that we used filter and to recap that filter checks wheter a value is true or false and then makes a new list 
    that is something that we used earlier to create a new list the next thing that we need to know is that the new 
    list that we made its going to be running another method on it and when that is done its going to check it and if 
    all the condition pass in each and every element its going to run true that is something to be aware of here.
*/