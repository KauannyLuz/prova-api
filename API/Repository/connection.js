
import mysql from 'mysql2/promise'


const con = await mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    passaward : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    typeCast: (field, next) => {
        if (field.type == 'TINY' && field.length == 1) {
            let valor = field.string();
            return valor === '1';
        }
        else {
            return next();
        }
    }
})

console.log('Conectou com BD');


export { con }
