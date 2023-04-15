class HospitalEmployee {
    constructor(name){
        this._name = name;
        this._remainingVactionDays = 20;
    }

    get name(){
        return this._name
    }

    get remainingVactionDays() {
        return this._remainingVactionDays
    }
    
    takeVactionDays(daysOff) {
        return (this._remainingVactionDays -= daysOff)
    }

    static generatePassword(){
        return (Math.floor(Math.random() * 10000))        
    }

    /* So here we are talking about generatePassword and something to be considerate about 
    here is this that its going to be a method that is going to be for HospitalEmployee only 
    and its called generatePassword the instances of the class arent going to be using this 
    funtion that is something to be considerate about here */

}

class Nurse extends HospitalEmployee {
    constructor(name, certification){
        super(name)
        this._certification = certification
    } 

    get certification() {
        for (const iterator of this._certification) {
            console.log(`Certification ${iterator}`);
        }
    }

    addCertification(newCertification) {
        this._certification.push(newCertification)
    }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"])

console.log(nurseOlynyk.name); 

// displays nurse certification
nurseOlynyk.certification

// Subtract 5 from total
nurseOlynyk.takeVactionDays(5)

// Display 15 
console.log(nurseOlynyk.remainingVactionDays);

// Add a certification 
nurseOlynyk.addCertification("Genetics")

// displays nurse certification
nurseOlynyk.certification

/* Here notice what we had did we created a nurse class and then we extended it of the 
HospitalEmployee class another thing that we did which was new was that we passed in 
a list to the second parameter to the Nurse class and what we then did was that we 
ran a for loop and got each index and then logged it this was new because this shows 
us that we can pass a list to our code  */

/*
    addCertification(newCertification) {
        this._certification.push(newCertification)
    }
*/

/* Here there is something that I wanted to mention we created this method called 
addCertification and what I wanted to mention was that we used the array push 
method which was going to be adding a new element to our array the cool thing 
about this is that we used a referece function where we write the list and then 
we write push then we get the user input this was something that was really cool 
to understand here */