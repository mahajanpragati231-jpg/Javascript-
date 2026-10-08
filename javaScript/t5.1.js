function createWallet(start) {
    let balance = start;

    return {
        add(n) {
            balance += n;
            return balance;
        },

        spend(n) {
            if (n > balance) {
                return "Insufficient balance";
            }

            balance -= n;
            return balance;
        },

        show() {
            return balance;
        }
    };
}

const wallet = createWallet(100);

console.log(wallet.add(50));
console.log(wallet.spend(30));
console.log(wallet.spend(500));
console.log(wallet.show());

wallet.balance = 99999;

console.log(wallet.show());
