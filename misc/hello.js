const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim();
const tokens = input.split(/\s+/);
let ptr = 0;

const ns = () => tokens[ptr++];
const ni = () => Number(tokens[ptr++]);

function solve() {
    const str = ns();

    console.log(str);
}

solve();