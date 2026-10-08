let taxRate = 0.18;

function finalPrice(amount) {
    return amount + (amount * taxRate);
}

console.log(finalPrice(1000));
console.log(finalPrice(500));