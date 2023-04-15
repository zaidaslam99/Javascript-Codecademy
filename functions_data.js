const announceThatIAmDoingImportantWork = () => {
    console.log("I am doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;

busy();
console.log("_________________________________________");


/*
    * So in JS functions behave like any other data type in langauge we can assign function to 
    variables and we can reassign them to new vairables so what we are doing here is that we are 
    reassigning the function to a variable with a shorter name the firs thing that we need to 
    understand is tht we created a function with a long name that is taking in 0 arguements when one 
    parameter then you dont need () and now notice what we do is that we reassing that function 
    without the () and into a variable and we then call that variable as if it were a function so that 
    way instead of it taking so much space we write busy() and go back and check what busy() was for again 
    that is something to consider when it comes to writting this busy is a variable that holds a reference 
    to our original function if we could look up the address in memmory of busy and the address of announce...
    there is something else that is important notice that in the second line we just put the function in 
    without using () its important to understand that we are using constructors its cuz we are trying to put 
    a value in or pass in arg to our functions when it comes to this case we want to assign the value of the 
    function itself not the value it returns when invoked JS functions are first class objects this means 
    like other objects we encountered JS functions can have properties or methods.
*/  

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 5; i++) {
        if ( (2 + 2) != 4 ) {
            console.log("\nSomething has gones very wrong");
            break;
        }
    }
    console.log("The program ran successfully");
}

// Calling the function
checkThatTwoPlusTwoEqualsFourAMillionTimes()

/*
    * So lets take a look at this code the first thing that we need to know is that we created a long 
    function name and then what we did was that we used a for loop and said it to iterate 9 times the 
    loop is going to start at 1 and its less than 5 so its going up to 4 something that I learned was 
    that this code is going to check this condition 4 times and say if you put i = 5 then its going 
    to check it 5 times and if it equals false then its going to be saying something is very wrong and 
    after it checks 5 times times the best way to think of this code is more so of insurance.
*/

// Setting the variable that is set to a function
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes

// Calling the variable function 
is2p2()

// Call the name of the function
console.log(is2p2.name);


/*
    * So here lets take a look we are calling the name method and what this does is that 
    it gets the name of the function its using the object oriented appraoch to it where 
    we created a function object and then we run the method to access the name of the function
*/