console.log(greetWorld());

function greetWorld() {
    console.log("Hello World");
}

/*
    * Some General notes thus far: we saw that a function definition binds a function to an 
        identifier however a function declartion does not ask the code inside the function body to run
        it just declares the existence of the function this code inside a function body runs or executes
        only when the function is called.

    * So we are going to be talking about functions when it comes to JS and this is known as hoisting this 
        is something that is strange but the idea is simple when it comes to JS and that is we can call a
        function before defining a function notice in this code that we called the function called greetWorld()
        and then we defined the function if this were python then this wouldn't have happened rather since this 
        is not python we can do this although this is considered bad practice so be aware that JS allows you to 
        do hoisting. 
*/
