function getSizes(l, w, d) {
    var V = l * w * d
    var A = l * w
    let L = [V, A]
    return L
}

var areaOne = getSizes(3,2,2)[0]
var areaTwo = getSizes(3,2,2)[1]


console.log(areaOne);
console.log(areaTwo);

/* So here we created a funtion which is taking in three parameter values 
and then its returning two separate reuslt and storing them into a list 
which was new for me the second thing that its doing is that its returning 
the list something new that I learned in this code was notice how we called 
each of the list value at 0 or 1 with the function getSizes this is something 
to consider here when it comes to working with this code.*/