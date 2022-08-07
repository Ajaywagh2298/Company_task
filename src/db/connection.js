const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contact',
    port: 3306
});

connection.connect(err => {
    if (err) {
        console.log(err, 'DB_Error')
    }
    console.log('Database Connected ...')
});


module.exports = connection;