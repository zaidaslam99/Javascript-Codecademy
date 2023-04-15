class Surgeon{
    constructor(name, dept){
        this._name = name;
        this._dept = dept;
    }

    get name(){
        console.log(`Surgeon Name: ${this._name}`);
    }

    get dept(){
        console.log(`Department: ${this._dept}`);
    }
}

/* So here to summarize the code we created a Surgeon class and notice how we did it 
    we called class then Surgeon{} and within it we passed constructor(name, dept){} */

const surgeonCurry = new Surgeon("Curry", "Cardiovascular")

surgeonCurry.name
surgeonCurry.dept

const surgeonDurnat = new Surgeon("Durant", "Orthopedics")

surgeonDurnat.name
surgeonDurnat.dept


/* This code is rather self explanatory here but we created two methods called get name 
    and dept and they are going to give attribute value the thing that I wanted to 
    emphasis on here is that we are creating an object of the class and then we are going 
    to be giving it parameter values its important to understand that we are using the 
    keyword new and this means that we want to create a new object of the class called 
    variable in this case surgeonCurry remember dont foget to camelcase and then get the 
    name and dept parameter value  */