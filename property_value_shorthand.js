/* Es6 introduced some new shortcuts for assigning properties to variables known as 
    destructing in the previous exercise we created a factory function that helped us create 
    objects we had to assign each property a key and a value even though the key name was the 
    same as the parameter name we assigned to it */

const monsterFactory = (name, age) => {
    return {
        name: name,
        age: age
    }
};

/* So here there is something that I wanted to mention and that was we are using the 
    fat arrow here notice in other functions that we created we didnt really use the 
    fat arrow we just simply shortned it down*/

/* Image if we had to include more properties that process would quickly become more 
    tedious we can use a destructing techqniue called property value shorthand to 
    shorthand*/

const monsterFactoryzzz = (name, age) => {
    return {
        name,
        age
    }
};

const x = monsterFactoryzzz("zaid", 25)

console.log(x.age); 

/* Something that I found to be super tedious here is that when we were writting the 
    key and values for our function there was so much repeating elements here and it was 
    getting annoying to have to write those things all over again so what ES6 allows us 
    to do is that we can write name, and age and it works like the code above which I 
    found to be pretty cool ngl */