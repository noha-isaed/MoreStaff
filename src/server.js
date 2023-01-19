const config = require('./config');
const mysql = require('mysql2') ; 

let Database = null ; 

class connection {

    connection() { } 

    createConnection(host, username, password, database ){

        Database = mysql.createConnection({
            host: host,
            user: username, 
            password: password,
            database: database
        });
        return Database;
    }
}

module.exports = {
    connection
}; 