// Importing module lodash after it has been installed using NPM
const ld = require('lodash');
const items = [1, [2, [3, [4]]]];

// Calling function to put items in to single array
const newItems = ld.flattenDeep(items);
console.log(newItems);
