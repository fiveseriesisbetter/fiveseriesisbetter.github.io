subscribe(name, email) {
	var fs = require('fs');
	var person = {};
	person.name=name;
	person.email=email;
	var txtStr = JSON.stringify(person);
	fs.appendFile('subscribers.txt', txtStr, function (err) {
		if (err) throw err;
		console.log('Updated!');
	});
}