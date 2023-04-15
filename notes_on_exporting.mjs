// When using export default you have to write a function 
// this way 
export function playGuitar(){
    return "Play guitar";
}

export const shredding = () => {
    return "Shredding some licks";
}

export const plucking = () => {
    return "plucking the strings"
}

// export default playGuitar
// export {shredding, plucking};

/*
    * So here I learned something new first and foremost
    there are two ways to export default playGuitar and this 
    is going to be the function the second thing that we are 
    going to do is export shredding and plucking notice how 
    one we can use the default and function name I was using 
    it in wrong syntax error when using default you export 
    function as it is and when doing exporting multiple 
    functions we do {} and pass in the function into the {}

    * The other thing that we need to know is that you can 
    use export statement and just export function as it is 
    and when it comes to export default you can pass in the 
    function playGuitar(){} cuz thats how JS wants it to be 
    done.
*/