function makeCupCounter() {
    let cups = 0;

    return function() {
        cups++;
        return "Cup number " + cups + " of chai";
    };
}

const friend1 = makeCupCounter();
const friend2 = makeCupCounter();

console.log(friend1());
console.log(friend1());
console.log(friend1());

console.log(friend2());
console.log(friend2());
