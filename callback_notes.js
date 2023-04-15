function one(call_two) {
    call_two()
    console.log("Yo name is zaid sup bro");
}

function two() {
    console.log("Step 2");
}

one(two)


/*
    *  So even though this code is simple to understand 
    something that I wanted to mention here was this 
    that when we use callback its hard to see this but 
    notice after using call_two you can then understand 
    that oh this function is just going into the other 
    function 
*/