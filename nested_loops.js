const myArray = [6, 19, 20];

const yourArray = [16, 190, 20];

for (let w = 0; w < myArray.length; w++) {
    for (let v = 0; v < yourArray.length; v++) {
        if (myArray[w] === yourArray[v]) {
            console.log("These number are the same " + myArray[w]);                
        }
    }
}

/*
    * So the first thing that we need to understand when it comes to this code is 
    the understanding of how loops work when they are nested the best way to understand this 
    using a clock for each hour there are 60 minutes meaning that the outside iteration is 
    going to go 60 times for each on the best way to think of this is as list for each item 
    in the outer most the inner is going to repeat three times this is the basic logic when 
    it comes to working with nested loops the first.  

    * So I was able to get this code to work I dont know what mistake that I was making but the 
    logic here is that we want to check each element in yourArray and cross reference it with each 
    index value of myArray and say if they are equal what we are going to be doing is that we are going 
    to be printing the myArray element really that is about it when it comes to this code.
*/

const bobFollowers = ["Erin", "Levi", "Mikasa", "Reiner"];

const tinaFollowers = ["Saitima", "Levi", "Gojo", "Jackie"];

const mutalFollowers = []


for (let i = 0; i < bobFollowers.length; i++) {
    for (let c = 0; c < tinaFollowers.length; c++) {        
        if (bobFollowers[i] === tinaFollowers[c]) {
            mutalFollowers.push(tinaFollowers[c])
        }
    }
}

console.log(mutalFollowers);

/*
    * So here there was something that I wanted to ellobrate on here as well the first being 
    that we created two list using the const variable and then now what we are going to be focusing 
    on is the syntax we already stated that therreis an intial value then the max value will be the 
    length of the list and the increment now we are going to do that and give a different variable 
    expression for obivous reason and then  we state that if the first list element matches the element 
    of the seconf then we go ahead and write it to an empt list using the push method.
*/

for (let x = 0; x < 10; x++) {
    for (let q = 0; q < 5; q++) {
        console.log(x,q);
    }
}

/*
    * So lets examine this code here what I was tryng to do was to create a rectangle 
    the first thing that we need to know is that our x we have set to 0 and then we state 
    its less than 10 and then increment and for q what we say is that less than 5 then starts 
    at 0 and increment and we just log the values this means that if we created a list of x 
    then its going to store x = [0->9] and q = [0->4] notice that its not including 10 or 5 
    for obivous reason.
*/














