const flowers = ["penny", "daffodil", "marigold"];

function addFlower(arr) {
    arr.push("lilly")
}

addFlower(flowers)

console.log(flowers);

/*
    * So here lets take a look at what is going on the first thing that we did was that 
    created a list and then we created a function that is taking in an arg and here is 
    where we worked backward by passing in a list to the function we then call that arg 
    that is in the function and run a list method on it and then we passed in what we 
    watned to add to our list so this function is going to take in a list and then we printed 
    the list.

    * So when pass an array to the function if the array is mutated inside the function that change 
    will be mainted outside the function as well you might also see this concept expained as pass
    by reference since what we acutally passing the function is a reference to where the variable 
    memmory is stored and changing the memory
*/

const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
    arr[3] = "MUTATED";
}

changeArr(concept);


console.log(concept);


function removeElement(newArr) {
    newArr.pop()
    console.log(newArr);
}

removeElement(concept);


const removeElements = (newArrs) => {
    newArrs.pop;
    console.log(newArrs);
}

removeElements(concept);