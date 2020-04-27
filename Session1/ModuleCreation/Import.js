// file that need to require the exported file
const operations = require('./Export');

console.log('addition', operations.add(2, 4));
console.log('subtraction', operations.sub(6, 4));
console.log('multiply', operations.mul(3, 4));
console.log('divide', operations.div(8, 2));
