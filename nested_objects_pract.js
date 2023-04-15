/*
    * So here we created a spaceship object it has mutliple different objects and 
    objects within objects.
*/

let spaceship = {
    
    /* Notice here that this is a key and value within our object and the value 
    to the key is null really all there is */
    passenger: null,
    
    /* Here we created an object within an obj the thing to know is that the obj is 
    saved as telescope as the key and it has 3 different keys within the object each 
    with their coressponding value this is everything that we learned thus far on how 
    to write regular objects  */
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    
    /* This is demonstrating objects within objects and something that I wanted to mention 
    was that we can have a crew object and within the crew we can have an object named 
    captain and the best way to think of this is that we are creating profiles for each 
    memmber of the crew so there is going to be cap then worker1 or worker 2 this helps us 
    understand how objs within objs work so our cap obj has two key values the name and the 
    degree something else that we learned was that we can use functions as the values and 
    here this is a shorter way of writting functions lastly we can see that we are passing 
    in a list to the key so this shows us that we can store obj within obj and alongside we 
    can store a key and for its value we can store a list*/
    crew: {
        captain: {
            name: 'Sandra',
            degree: "Computer Engineering",
            encourageTeam () {console.log("Sup B");},
            "favouriteFoods": ["Cookies", "Cake", "Candy", "Spinach"]
        },
    },

    // Standard oject within obj with a key and value
    engine: {
        model: "Nimbus200"
    },

    /* Here the thing to know is that our main object we are going to be created a branch
    called nanoele and within it we created two objects one called computer that is 
    getting the specs and the other called backup which is getting its data and we use 
    our understanding of keys and values to aquire this data. */
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        "back-up": {
            battery: "lithium",
            terabytes: 50
        }
    }
}

const capFav = spaceship.crew.captain["favouriteFoods"][0]
console.log(`The cap fav food is ${capFav}`);

const get_degree = spaceship.crew.captain.degree
console.log(`The degree is ${get_degree}`);

const battery_status = spaceship.nanoelectronics["back-up"].battery
console.log(`The battery type is ${battery_status}`);

/* Something that is new that makes sense is that we are using the object then the 
    crew and then we are using the cptain object and within it we have the key so 
    here there was something new that i learned and that being that we are using the 
    key as strings what we do is that use the [] I think this might be the default way 
    when it comes to working with strings as the keys because you cant use dot notation 
    so you have to use bracket notation because then that is going to reference the key 
    so in the first line we are using bracket notation which reference the first index 
    in the list and the second line we are going to be using the all dot notation and that 
    is going to refernce the degreee and in the last variable we are going to be using 
    the [] this then refernces the object key and then we can refernce either the 
    positioning or if there is a key wihtin the object key. */


spaceship.passenger = [{name: "Jim"}, {name: "Jane"}]

const firstPass = spaceship.passenger[0]


console.log(`The first passenger is ${firstPass.name}`);

/* Here lets take a look at what is going on here notice that we have a key as the 
    passenger and the value is null we then set the passenger value to a array that 
    contains objects and then what we do is we label each element and give it a key 
    and value and what we then do is create a variable that then stores the object 
    to the variable and we then run the name method on the object and it gives us the 
    value of that key that is something that you need to know here */