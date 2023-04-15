const words = ["choir", "music", "pillow", "brick", "pen", "door"];

const shortWard = words.filter(x => {
    return x.length < 6;
});

console.log(shortWard);

/*
    * So lets examine what is going on here the first thing that we need to know is that .map and 
    .filter returns a new array however .filter returns an array of elements after filtering out 
    certain elements from the original array the callback function from filter method should return 
    true or false depending on the element that is passed into it the element that cause the callback 
    function to return true are added to the new array so here we created a new array that we stated 
    with the filter method that we want the length of thee array to be less than 6 notice that all the 
    words pass except "pillow" there fore since it results to false we are not returning it that is 
    something important to consider when it comes to writting this code  

*/

const randomNumber = [375, 200, 3.14, 7, 13, 852];

const smallNum = randomNumber.filter(x => {
    if (x < 200) {
        return x
    }
})

console.log(smallNum);
console.log();

const favouriteWords = ["nostalagia", "hyperbole", "fervent", "esoteric", "serene"]

const new_words = favouriteWords.filter(x => {
    if (x.length < 7) {
        return x
    }
})

console.log(favouriteWords);
console.log(new_words);

/*
    * So here there is something that I wanted to mention here we created a list and we 
    are checking to see if the length of each element in the list is less than 7 and if 
    it is less than 7 then we are going to be returning it to the new list this was 
    something that I found to be interesting.
*/