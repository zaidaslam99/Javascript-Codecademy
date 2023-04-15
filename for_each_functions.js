let rank = ["A", "B", "C"]

for (let index = 0; index < rank.length; index++) {
    const element = rank[index];
    console.log(element);
}

console.log();

rank.forEach(function(element) {
    console.log(element);
})

/* * So here lets examine what is going on the first thing that we did was 
that we created a list that had 3 different elements within the list the 
next thing that we created was a for loop which we index through the list 
now when it comes to the forEach here is what you need to know this method 
iterates over each element in an array and executes a predefined function 
once per element. What this code is doing is that its using the array that we 
used and then using the forEach loop on the array we are calling a function 
within our array what this means is that each element gets treated as the 
element value so its running a function once per element so here we are basically 
saying that hey for each element in the array lets run a function that is going to 
display each individual element and notice how we call the function block within 
our loop it saves us from writting all the excess when it comes to working with 
for loops */