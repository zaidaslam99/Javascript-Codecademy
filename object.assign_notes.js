const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// expected output: true


/* So here we learned something new and that is to enumerate which acts as the objects 
    own properites we have two object one is called target the other is called source and 
    what we do is we use Object.assign() and within it we have two objects the first 
    being the one we created and the second being the source object here is the funny thing 
    though what we do is that our target is now going to be a and c the value of b however 
    is going to be from 2 to the source object so basically the souce is going to override 
    the previous object that we created in summary*/