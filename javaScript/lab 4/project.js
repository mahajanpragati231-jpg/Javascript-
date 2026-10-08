 let correctPin = 1234;
let enteredPin = 9999;
let balance = 5000;
let choice;
let amount;

// Situation A - Wrong PIN

if (enteredPin === correctPin) {

    choice = 1;

    switch (choice) {

        case 1:
            console.log("Current Balance:", balance);
            break;

        case 2:
            amount = 7000;

            if (amount > balance) {
                console.log("Insufficient funds");
            } else {
                balance = balance - amount;
                console.log("Withdrawal successful");
                console.log("New Balance:", balance);
            }
            break;

        case 3:
            amount = 2000;
            balance = balance + amount;
            console.log("Deposit successful");
            console.log("New Balance:", balance);
            break;

        default:
            console.log("Invalid choice");
    }

} else {
    console.log("Wrong PIN. Access Denied.");
}