const nestedArr = [[1], [2, 3]];

// This get the first element.
console.log(nestedArr[0]);

// This get the second element.
console.log(nestedArr[1]);

// This will be undefined because there are no
    // other elements only 2.
console.log(nestedArr[2]);

// This is going to print the first element in the list again 
    // even though the other way also prints the first only 
    // thing to know is that we are doing row and coloum.
console.log(nestedArr[0][0]);


// The second is going to print the first number in the second list 
console.log(nestedArr[1][0]);

// This is going to print the third number in the second list.
console.log(nestedArr[1][1]);

console.log("_____________________________________________");

const numberCluster = [[1,2], [3,4], [5,6]]
const target = numberCluster[2][1]

console.log(target);

console.log(numberCluster[0][0]);
console.log(numberCluster[0][1]);


console.log(numberCluster[1][0]);
console.log(numberCluster[1][1]);

console.log(numberCluster[2][0]);
console.log(numberCluster[2][1]);
