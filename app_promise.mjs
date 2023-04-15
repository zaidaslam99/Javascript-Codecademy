import { checkInventory } from "./library.js";

const order = [["sunglasses", 1], ["bags", 2]]

const handleSuccess = (res) => {
    console.log(res);
}

const handleFailure = (rej) => {
    console.log(rej);
}

checkInventory(order).then(handleSuccess, handleFailure)