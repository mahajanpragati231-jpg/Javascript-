let correctPIN = 1234;
let guessPIN = 1234;

if (guessPIN === correctPIN) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

guessPIN = 9999;

if (guessPIN === correctPIN) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}