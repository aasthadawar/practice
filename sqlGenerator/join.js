const SqlGenerator = require('sql-generator');
const sqlgen = new SqlGenerator();

const dataA = {id: 2,firstname:'aastha', lastname: 'dawar', technology: ['c','c++','js'], joining: '03-02-2020'};

const dataB = {id: 2, address: 'vikaspuri', city: 'delhi', pincode: '110018'};

const joinQuery = sqlgen.select(['A','B'],['firstname','address'],{'A.id':'B.id'});

console.log('the join query:::::::::', joinQuery);