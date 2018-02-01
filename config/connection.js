var mysql = require('mysql');
//connection details. Modified for online usage.
var connection = mysql.createConnection({
  port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'n2p49n2gd6vhbjhn',
    database: 'w2oa7q2qpiqfvabn'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
//export to other files. like server.
module.exports = connection;