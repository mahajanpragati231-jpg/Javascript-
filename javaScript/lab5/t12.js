function outerFunction() {
    let message = "Hello from outer function";

    function innerFunction() {
        console.log(message);
    }

    innerFunction();
}

outerFunction();