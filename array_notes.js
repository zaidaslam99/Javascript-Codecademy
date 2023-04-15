function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const f = function (x) {
    return x * x * x;
  }
  
  const numbers = [0, 1, 2, 5, 10];
  const cube = map(f, numbers);
  console.log(cube);


/*
  * So here lets examine what is happening in this code the first thing that we need 
  to know is that we have a list that has 5 different elements and the next thing that 
  we are doing is that we create an expression where we pass in f as the first arg and then 
  numbers as the second arg which is the list the next thing that we do is that we log the 
  that expression now lets take a look at the function we create an expression called f which 
  is a function that is returning arg cubed we pass in the function at f something that I wanted 
  to cover was that this is working similar to nested function and the thing to take away here is 
  that f is going to be taking in a function expression is called f and a is going to be taking in a 
  list now the next thing that we are doing is that we created a variable that has a list and from 
  my understanding this list is going to be an empty list and its going to be stored into the results 
  exprression we then start a for loop specify the index starting and stopping and increment and what
  we do is that we get that list that is empty at the specific coordinate at i we then make it equal to 
  say 0 value of new list and while we are doing that what we are doing is that we are passing in a[0]
  and this will be 0 and that gets passed into f and what happens is that number gets cubed so its like 
  we are passing in a list within a function.
*/

