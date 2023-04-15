for (let i = 0; i < 99; i++) {
    if (i > 2) {
        break;
    }
    console.log(i);
    console.log("Banana.");
}

console.log("Orange you glad that I broke out the loop");   

/* 
    * So here we are going to be talking about the break statement and the thing to 
    know is that notice this loop the first thing that we stated was that the loop 
    should start at 0 and then its less thaan 99 andd it increments we than stated if 
    the loop is greater than 2 then break now to the untrained eye since we saw 2 that 
    doesnt mean that the loop is going to run twice instead what it means is that if i 
    exceed the value of 2 then stop the loop so the loop is going to run otherwise the 
    loop is going to stop now the thing that we needed to mention here is that notice how 
    the console.log() is used its outside the if block if we had written this loop using 
    the pythonic way it would make sense to write the log statement within the if block 
    but here we write the block and then the what we are going to type in this case Banana 
    
    * So something new that I learned was when it comes to understanding loops I wrote the same 
    code using python and to understand that we have out for loop that is running on the outside 
    and we can then have the if block which is going to check the loop outside the if block is 
    still the loop clause and its going to run the loop and the loop is going to check the if 
    block and keep running had you wrote it else where or within the if clause than its going to 
    be wrong that is something new that I learned.
*/

console.log("_______________________________________");

const rapperArray = ["Lil", "Kim", "Jay-Z", "Notorious B.I.G", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
    if (rapperArray[i] === "Notorious B.I.G") {
        break
    }
    console.log(rapperArray[i]);
}

console.log("And if you don't know now you know");

/* So this code was really cool because it had taught me something new the first thing that we 
    need to know is that we started an array that had different elements and we started our for 
    loop on that array we then stated if element in array is BIG then break till then print each 
    elemenet and outside the for block we stated a simple print statement that demonstrates that 
    out of for loop we no longer run iterations and simple script its important to understand all 
    this */