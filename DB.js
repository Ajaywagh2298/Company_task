const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'contact',
    port:3306
});

db.connect(err=>{
    if(err) {
        console.log(err,'DB_Error')
    }
    console.log('Database Connected ...')
});

module.exports = db ;