const names = require('./names.js');
const sayHi = require('./utils.js');
const alternative = require('./alternative.js');

sayHi('Ceri');
sayHi(names.john);
sayHi(names.peter);
sayHi(alternative.singlePerson.name);

item = alternative.items[0]; 