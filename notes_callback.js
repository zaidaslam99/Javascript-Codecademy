/*
    * This code you are going to learn callback functions 
    in simple terms 
*/

function print(params) {
    console.log(params);
}

function useCallback(callback) {
    callback("Hello")
}

useCallback(print)

/*
    * So lets examine what is going on here we created a function 
    called print and in it we passed a parameter what we than 
    did was that we created a useCallback function and in it we
    had passed callback what this does is that we are passing 
    in a function and then the arg so in this case when we 
    pass in the print function there already is an argument there
    that we can use that is something new that I learned.

    * So the best way to understand this logic is that instead 
    of seeing callback we see it as a functionbook mark and it 
    having data already preloaded and all we gotta do is pass in 
    the function that we want to use there 
*/

function printPerson(person) {
    console.log(person);
}

const person = {name: "Zaid"}

// This prints out entrie object
printPerson(person)

// This prints out the name 
printPerson(person.name)

/* 
    * The important thing that this code was teaching 
    was that you need to treat function as objects essentially 
    they are no different from objects just as you see this 
    here you need to understand that functions are no different 
    when it comes to passing in a constructor.
*/

function print(value) {
    console.log(value);
}

function useCallback(callback) {
    callback("Hello")
}

// Error
// useCallback(print())

/* 
    *  So here there is something that you need to understand 
    the logic behind it and that being do you want to call the 
    function or pass the function along when you pass in the 
    () this means that hey pass the results of the function and 
    when you pass the function itself it means that hey run this 
    function inside this function essentially it comes down to 
    do you want a part vs whole so like say if you put () its 
    like hey let this function run whatever it returns pass this in 
    to the function 
*/





















