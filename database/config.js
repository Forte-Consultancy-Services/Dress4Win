var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '10.148.0.29',
  port     : '3306',
  user     : 'root',
  password : 'P@ssW0rd2020',
  database : 'eCommerce'
});

connection.connect(function(err) {
    if (err){
      console.log(err);
      //throw err;
    } else {
      console.log('DB connected :)');
    }
});

module.exports = connection;