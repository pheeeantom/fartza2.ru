const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "127.0.0.1",
    user: "fartsa",
    password: "S$PD5TsU@ke8JEhT~J9M", 
    database: "fartsa"
}).promise();

module.exports = pool;