function makeMultiplier(n) {
    return function(x) {
        return x * n;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));
