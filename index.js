const fs = require('fs');

const txt = fs.readFileSync('./txt/append.txt', 'utf-8');

const textOut = `This is something at i added. ${txt}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('file added');