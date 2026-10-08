// Main code at the TOP

const wallet = createWallet(500);
const loginGuard = limiter(3);

console.log("Starting Balance: " + wallet.show());

console.log("Added: " + wallet.add(200));

let attempt1 = loginGuard();

if (attempt1 !== "Locked!") {
    console.log("Login Guard: " + attempt1);
    console.log("Spent: " + wallet.spend(150));
}

let attempt2 = loginGuard();

if (attempt2 !== "Locked!") {
    console.log("Login Guard: " + attempt2);
    console.log("Spend Result: " + wallet.spend(1000));
}

console.log("Final Balance: " + wallet.show());

console.log("History:");
console.log(wallet.history());

console.log(
    "Final Summary: Balance = Rs." +
    wallet.show() +
    ", Transactions = " +
    wallet.history().length
);


// Functions below


function createWallet(start) {
    let balance = start;
    let transactions = [];

    return {
        add(n) {
            balance += n;
            transactions.push("Added " + n);
            return balance;
        },

        spend(n) {
            if (n > balance) {
                return "Insufficient balance";
            }

            balance -= n;
            transactions.push("Spent " + n);
            return balance;
        },

        show() {
            return balance;
        },

        history() {
            return transactions;
        }
    };
}


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