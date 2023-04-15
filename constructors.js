/* In the last exercise we worked with classes and what we then did was passed in 
constructor(name){} this is working with class now what is it exactly? This is known as the 
constructor method every time it creates a new instance of a class */

class Dog {
    constructor(name){
        this.name = name;
        this.behavoir = 0;
    }
}

/* So when it comes to working with class we dont use the conventional naming method where 
we do obj = {} instead we do class X { } alost as if its a method that isnt taking in () 
Somehthing else worth knowing is that JS will invoke constructor method every time we create 
a new instance of our Dog class */ 