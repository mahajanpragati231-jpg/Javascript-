//var version
const withVar = [];

for (var i = 0; i < 3; i++) {
    withVar.push(() => i);
}

console.log(withVar.map(f => f()));
 //let
const withLet = [];

for (let j = 0; j < 3; j++) {
    withLet.push(() => j);
}

console.log(withLet.map(f => f()));
