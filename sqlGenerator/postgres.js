const {Pool, Client} = require('pg');
const SqlGenerator = require('sql-generator');
const sqlgen = new SqlGenerator();

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "test",
    password: "Mehar@23",
    port: "5432"
});

var conString = "pg://postgres:Mehar@23@localhost:5432/test";
var client = new Client(conString);
client.connect();

const selQuery = sqlgen.select(['employees','help'],['firstname','pincode'],{'employees.id': 'help.id'});
console.log('select query::::::::',selQuery);

pool.query(selQuery.sql, selQuery.values).then(result=>console.log('result is',result.rows));

//const dataA = {id:2,firstname:'aastha', lastname: 'dawar'};
//const dataB = {id:2, pincode:110018};
// insert query 
//const insertQuery = sqlgen.insert('help', dataA);
//const insertQuery1 = sqlgen.insert('employees', dataB);

//const delQuery = sqlgen.delete('help',dataA);

//console.log('insert',insertQuery1);

//pool.query(delQuery.sql, delQuery.values).then(result=>console.log('result is',result));

//pool.query(insertQuery1.sql, insertQuery1.values).then(result=>console.log('result is',result));

//pool.query(insertQuery.sql, insertQuery.values).then(result=>console.log('result is',result));


