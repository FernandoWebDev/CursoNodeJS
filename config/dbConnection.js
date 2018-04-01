var mysql = require('mysql');

 	var connMySQL = function(){
		return mysql.createConnection({
		host: 'a',
		user: 'a',
		password: 'a',
		database: 'a'
	});
}

module.exports = function() {
	return connMySQL;
};
