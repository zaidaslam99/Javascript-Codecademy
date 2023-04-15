let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo);
    // Increment
    counterTwo++
        
}

console.log("________________________");

/* 
    * Here lets take a look at what is going on here the first thing that we need
    is that the first thing that we did was that we declared a variable and then we 
    stated when the condition should end in this case its going to be when the value 
    of counterTwo is going to be less than 4 we then printed the value of what counterTwo 
    is going to be and then we incremented the variable. SIDENOTE I found this to be strange 
    here not going to lie because usually in python you would go and say while x < 4 : print x 
    and its the same logic but when it comes to while loops we need to have an increment value.
*/


const cards = ["diamond", "spade", "heart", "club"];

let currentCard = 0;

while (currentCard < cards.length) {
    console.log(cards[currentCard]);
    currentCard++
}
/*
    * So lets break down what is going on here the firs thing is that we have a list 
    that has 4 elements here the first thing that we do is that we used currentCard and set 
    it to 0 then what we did was that we stated that the currentCard < aka the number has to 
    be less than the length of the list and then we logged the number at that point and then we 
    incremented that number which was that variable that is something to be aware of here.
*/

console.log("_______________________________________________");

// Notice we declared a variable but didnt set it to anything
let newCard;

// We than used that variable to start our loop if it reaches this 
    // condition then loop stops 
while (newCard !== "spade"){
    // all this does is get a ranom number 
    newCard = cards[Math.floor(Math.random() * 4)];
    console.log(newCard);    
}

/*
    * So lets talk about what is going on here the first thing that we need to know is that we are 
    using math.floor to round a number to the nearest whole number and lets take a look at next code. 
    So math.floor(Math.random() * 4) will give us a random number from 0 to 3 well use this number 
    to index the cards array and assign the value of currentCard to a random element from that array.
    So first thing that we are doing is notice that we are calling the cards array and then we are doing 
    the math.floor and math.random(), so here the thing that I learned was that when it comes to the other 
    code down below when we pass an arg it follows the n-1 rule like for instace say if wanted to put 4 
    we are saying numbers 0,1,2,3 so up to 3. First and foremost understand that we didnt set newCard to 
    anything the next thing that we did was we said that newCard !== spade and then we set the index of what 
    newCard should be based on [] list format the interior is basically trying to find the index and then once
    we get the number we get which number it is its a fancier way of using random that is something to consider 
    when it comes to working with this code. Now I understand this code more the reason why we said that 
    newCard !== "spade" it because the loop stops running once it sees a spade 

    ______________________________________________________________________________________________

    function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }

    console.log(getRandomInt(3));
    // expected output: 0, 1 or 2

    console.log(getRandomInt(1));
    // expected output: 0

    console.log(Math.random());
    // expected output: a number from 0 to <1

    * The first thing that I wanted to mention here was that we created a function called getRandomInt and there
    we took a parameter value and then its important to understand that Math.random * max will give a decimal number 
    the other thing worth knowing is that Math.random gives us a number between 0 - 1 and then it will * our max and
    the number is going to be 2.4 -> rounds to 2 SIDENOTE: so the reason why I had wrote this code was that looking 
    back at this I used to wonder what this is saying but now I can look at it and me like hey I understand what is 
    going on here 
*/


/*
    * So there is something that we are going to be going over and this is going to be the Math.random() here the thing that 
    we need to be aware of here is that this is going follow the n-1 rule so meaning that when we use math.Random whatever 
    we multiply by we need to add one so that way we can get a number between that range for example 

    var random = (Math.random() * 10) + 1; 

    * This is going to be storing a value from 1-10 had we not used + 1 this is going up to 9.

*/