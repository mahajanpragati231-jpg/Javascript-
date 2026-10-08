function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counterA = makeCounter();

console.log(count);
