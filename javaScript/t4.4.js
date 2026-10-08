function makeGreeter(greeting) {
    return function(name) {
        return greeting + ", " + name + "!";
    };
}

const greet = makeGreeter("Namaste");

console.log(greet(" pragati"));
