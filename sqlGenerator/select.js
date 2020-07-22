const SqlGenerator = require('sql-generator');
const sqlgen = new SqlGenerator();

const selectQuery = sqlgen.select('test_table', ['firstname', 'id'], {id: {'>': 1, '<': 10}});

console.log('the slect query :::::::::', selectQuery);