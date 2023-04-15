function talk() {
    console.log(`I am ${this.name}`);
}

const me = {
    name: "Sina",
    talk
}

const you = {
    name: "Qali",
    talk
}

me.talk()
you.talk()

/*
    * this changes relative to whatever you are calling 
*/