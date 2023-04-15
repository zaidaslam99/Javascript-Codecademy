  let groceryItem = "tomato";

  switch (groceryItem) {
    case "tomato":
        console.log("Tomatoes are $0.49");
        break;
    case "lime":
        console.log("Limes are $1.49");
        break;
    case "papaya":
        console.log("Papayas are $1.29");
        break;
    case "watermelon":
        console.log("$1.59");
        break;
    default:
        console.log("Invalid item");
        break;
  }

  /*
    * So here there is something that I wanted to mention first we are going to be 
        doing a recap over everything the first thing that we learned was that when 
        it comes to JS we have to let the software know that awe are declaring a 
        variable other wise it doenst really know that when it comes to else if statement 
        they are easy to read and easy to write something that I wanted to mention was that 
        say if we had to write this code using an elif we would have to write so much and 
        when it comes to the switch statement what we can do instead is have the variable 
        decared dring the swtich block and then we can have different cases in case they write 
        either of the args and have the apporiate message matching it. Something that I did notice 
        was that when it comes to JS is that we need to use ; most of the time when it comes to 
        declaring varibales and then when it comes to the switch notice that we have : and then we 
        have ; this takes in for that case then prints using what we want to write and then next one 
        uses ; to end and terminate that hey this ends here this is something that I wanted to address 
        here.
  */

/*
  * Something else that I learned was that when it comes to this code say if you didnt put the break
        statement and ran this code well then whats going to happen is that its going to run more than 
        one test case for example in this code if there was no break for tomato case then its going to
        run log for lime as well this was something that I wanted to iterate over as well. Its simple to 
        rememmber but if you dont put break then that case run.
*/

