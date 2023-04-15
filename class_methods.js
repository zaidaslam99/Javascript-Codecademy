/* At this point we have a Dog class that spins up the objects with name and behavoir
properties we will add getters and methods to bring our class to life. Class methods 
and getter syntax is the same as it is for object except you cannot include commas 
between methods */

class Dog {
    constructor(name){
        this._name = name;
        this._behavoir = 0;
    }

    get name(){
        return this._name;
    }

    get behavoir(){
        return this._behavoir;  
    }

    incrementBehavoir(){
        this._behavoir++;
    }
}

/* So here lets talk about what is going on we created a Dog class and then we passed in 
a constructor with the name variable we then did everything we have been doing thus far 
something that caught my attention was that notice that between the methods we arent passing 
any commas and when it comes to the methods we use ; when we created objects within function 
or just function within object its important to understand that we separated the objects here 
you can tell when working with objects our functions arent separated by , and within our 
function we dont have ;  */

class Surgeon {
    constructor(name, department){
        this._name = name;
        this._dept = department;
        this._remainingVactionDays = 20;
    }

    get name(){
        console.log(this._name);
    }

    get dept(){
        console.log(this._dept);
    }

    get remainingVactionDays(){
        return (this._remainingVactionDays)
    }

    takeVactionDays(daysOff){
        return (this._remainingVactionDays -= daysOff)
    }
}


const chefCurry = new Surgeon("Curry", "Golden State")

chefCurry.name
chefCurry.dept

// outputs 20
console.log(chefCurry.remainingVactionDays);

// Subtract 10
chefCurry.takeVactionDays(10)

// Output 10
console.log(chefCurry.remainingVactionDays);


const durant = new Surgeon("Durant", "Nets")

durant.name
durant.dept

// Display 20
console.log(durant.remainingVactionDays);

// Subtract 5
durant.takeVactionDays(5)

// Display 15
console.log(durant.remainingVactionDays);

/* So here lets examine what is going on the first thing that I wanted to point 
out was this ntoice the curly brace now this is a simple thing when we used 
get we didnt really worry about the contrutors and when we used a regualr method 
in the class object we had used the () this was something that i didnt really 
realize when I did but something that I wanted to clarify  */