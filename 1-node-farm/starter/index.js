const fs = require('fs');

const textin = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textin)

const textout = `This is what we know about avocado ${textin} Createed on ${Date.now()}`;

fs.writeFileSync('.txt/output.txt', textout);