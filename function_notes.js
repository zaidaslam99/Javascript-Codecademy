function getSizes(l, w, d) {
    var V = l * w * d
    var A = l * w
    let L = [V, A]
    return L
}

// Notice how we are calling this function and storing index to list.
var areaOne = getSizes(3,2,2)[0]
var areaTwo = getSizes(3,2,2)[1]

console.log(areaOne);
console.log(areaTwo);

/* Here we used our different parameters and then we made a list and then 
in the list we put two different variables in the list */