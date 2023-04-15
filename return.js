function rectangleArea(width, height) {
    let area = width * height;
    return area;
}

console.log(rectangleArea(10, 10));


/*
    * Here this is teaching us how to use the return statement here the first thing 
    that we did was that we created the rectangleArea and then got two parameters in 
    the width and height and then we created a variable that is going to be taking the 
    w * h and stored it into area an then it return the area.
*/

function rectangleArea(width, height) {
    
    if (width < 0 || height < 0) {
        return "You need positive integers " + 
            "to calculate area!";
    }
    
    let area = width * height;

    return area;
}

console.log(rectangleArea(10, 2));
console.log(rectangleArea(-10, -10));

/*
    * So here take a look at what is going on and compare it with the other code that we did 
    notice that in this we used an if condition that is going to be checking to see if width is 
    less than 0 and height is less than 0 and then it returns a string saying a message and if the area 
    is width * height then it returns the area and in the first function what we did was that we 
    passed in 10 and 10 and the other what we did was that we passed in -10 -10 and this allowed us to 
    see the if condition being executed while the first one was simply returned 10 * 2 and the other it 
    was taking negative parameter values.

    * So here lets take a look at the function we created rectangleArea here we take in two parameters 
    and then we have the if condition that is going to be checking the width and height and then its going to
    return a string something that I wanted to mention was that notice our way of writting it 
*/