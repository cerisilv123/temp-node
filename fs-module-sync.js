// Importing functions from module
const { readFileSync, writeFileSync } = require('fs');
console.log('start');

// Reading from a file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// Writing to a file
const text = "test"; 
writeFileSync('./content/first.txt', text, { flag: 'a' });

// Logging 
console.log('done with the task');
console.log('starting the next one');