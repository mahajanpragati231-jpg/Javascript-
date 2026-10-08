function limiter(max) {
    let used = 0;

    return function() {
        if (used < max) {
            used++;
            return "Attempt " + used + " of " + max;
        } else {
            return "Locked!";
        }
    };
}

const tryLogin = limiter(3);

console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());


