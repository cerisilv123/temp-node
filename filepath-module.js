const path = require('path');

// joins a file path together = '/content/subfolder/test.txt'
const filePath = path.join('/content', 'subfolder', 'test.txt'); 
console.log(filePath); 

// Gets the base of the path = 'test.txt'
const base = path.basename(filePath); 
console.log(base);

// Gets the absolute path based on what you passed in = 
// '/Users/cersilvester/Desktop/code/intro-to-node/content/subfolder/test.txt'
// __dirname = current directory
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);