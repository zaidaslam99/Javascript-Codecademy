import { checkInventory } from "./library.mjs";

const order = [["sunglasses", 1],["bags", 2]];


const handleSuccess = (res) => {
    console.log(res);
}

const handleFailure = (rej) => {
    console.log(rej);
}

checkInventory(order).then(handleSuccess).catch(handleFailure)

/*
    * So this is close to file exception and the thing that we need 
    to know here is someple that we pass the list into our function 
    and .then will inovke the success function and .catch will invoke 
    the failure function 

    * Something else that we need to know here is this that when it comes 
    to file excpetons in case there is an error somewhere that is something 
    that you need to know the logic is simialr to it. 
*/
