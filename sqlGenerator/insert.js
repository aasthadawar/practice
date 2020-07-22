const SqlGenerator = require('sql-generator');
const sqlgen = new SqlGenerator();

// data 1 used for table A
const dataA = {id: 2,firstname:'aastha', lastname: 'dawar', technology: ['c','c++','js'], joining: '03-02-2020'};

// insert query 
const insertQuery = sqlgen.insert('test_table', dataA);

// to print the insert query
console.log('the insert query is::::', insertQuery);

