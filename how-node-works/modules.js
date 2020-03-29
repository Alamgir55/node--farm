// console.log(arguments);
// console.log(require('module').wrapper);

const C = require('./test-modules1');
const calc1 = new C();
console.log(calc1.add(2, 5));

const calc2 = require('./test-modules2');
console.log(calc2.add(2 ,5));

require('./test-modules3')();
require('./test-modules3')();
require('./test-modules3')();