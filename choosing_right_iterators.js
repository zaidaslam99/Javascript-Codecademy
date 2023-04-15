const cities = ["Dallas", "Houston", "New Jersey", "Japan", "Tokoyo", "Kyoto"];

const nums = [1, 50, 75, 200, 350, 525, 1000];

cities.forEach(city => {
    console.log(`Have you vistied ${city}?`)})

console.log();

/*
    * Here its going to return the string with the element this is like using a simple 
    for loop that is something to be aware of when wroking with forEach

*/


const longCities = cities.filter(city => {
    return city.length <= 6;
});

console.log(longCities);
console.log();

/*
    * Here its going to be returning a new list with the specificed parameters 
    that is something to be aware of when working with longCities.
*/

const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C")

console.log(word);
console.log();

/*
    * So here lets talk about what is going on here so we talked about how the reduce method works 
    and the thing to know here is that we have acc value and then the currVal we talked about how the 
    string or number that is at the end is going to be added to our full word the thing to know here 
    is that the letter C is going to be added with each word or the first letter of each word in 
    each element that is something to be aware of here now that I look at it it makes more sense 
    that some mehtods work this way and other dont really simple to understand 
*/


const smallerNums = nums.map(num => num - 5);
console.log(smallerNums);

/*
    * So here what is happening is that this is going to be getting the list and its 
    going to be subtracting 5 from the list from each element right off the bat you need 
    to know is that methods have different ways of writting some are written with {} others 
    are just written with => and that really is all there is.
*/

console.log(nums.some(num => num < 0));

/*
    * So here the thing that I wanted to talk about is that notice that we are going to be 
    using the some method and the thing to take away from here is that its going to check each 
    element that is in the list and its going to check if each element is going to be less than 
    0 the thing to take away from here is that this is going to be returning a boolean value so 
    that is something to be aware of some iterations return concat value some accum value and some 
    boolean values
*/