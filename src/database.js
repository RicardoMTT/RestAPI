const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejs',
    port:3306
});

mysqlConnection.connect(function(err){
    if(err){
        console.log('Error');
    }else{
        console.log('DATABASE CONNECTED');
    }
});

module.exports = mysqlConnection;