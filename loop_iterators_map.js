const numbers = [1, 2, 3, 4, 5]


const num_storage = numbers.map(element => {
    return element * 10;
})

console.log(num_storage);


const new_num_storage = numbers.forEach(element => {
    return element * 10
})

console.log(new_num_storage);

/*
    * So here there is something that I wanted to make clear the thing that 
    we are doing is that we are getting each element and then * by 10 essentially
    creating a new list with what we stated that is something important to be 
    aware about something else worth knowing is that .map returns a new array
    this explains more about what we learned how when we create a new variable 
    and it alters the array and then stores a new array with new element value something 
    that I wanted to point out here is that say in the next iterator we used the forEach 
    and did the same thing when we printed the value of the list it gave us undefined this 
    means that when it comes to these iterators its important to understand that that some 
    store to a new list in this case .map and the forEach dont it modifys it its rather a 
    tedious thing to remmber when it comes to this code so this is something to be aware of 
    here.
*/

const animal = ["Hen", "Elephant", "llama", "leopord", "Ostrich", "Whale", "octopus"]


const first_char_array = animal.map(element => {
    return element[0]
})


console.log(first_char_array);

console.log(first_char_array.join(""));

/*
    * So in this array what we did was that we looped through each element and then got each index 
    value of each element at 0 and saved the output to a new list. So here something that I leanred was that 
    join returns an array with words as strings something cool that I learned was that when it comes to 
    building website is that we can have a list and it can contain values and we can use the join method 
    and it will bring all the words togther which I found to be pretty cool.
*/

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(x => {
    return x / 100
})

console.log(smallNumbers);

/*
    * SO here lets take a look at what is going on we created a list that has big numbers aad then what we 
    do is that we create a variable that is called smallNumbers and then we get that list that we have and divde 
    it by a 100.
*/

