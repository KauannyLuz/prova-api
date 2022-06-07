import mysql from 'mysql2/promise'

const con = mysql.createConnection({
    host : process.env.mysql_host,
    user : process.env.mysql_user,
    passaward : process.env.mysql_pwd,
    database : process.env.mysql_DB,



});
