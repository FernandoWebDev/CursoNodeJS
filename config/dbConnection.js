var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host: 'sql9.freemysqlhosting.net',
		user: 'sql9225592',
		password: 'NWcAyqaDaR',
		database: 'sql9225592'
	});	
}

module.exports = function() {
	return connMySQL;
};

