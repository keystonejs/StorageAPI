// Simple initialization
var Storage = require('../lib'),
	async = require('async');

Storage.init({
	custom: {
		provider: Storage.Providers.MongoDB,
		database: 'test'
	}
});

Storage.get('custom', function (err, client) {
	async.waterfall([
		function uploadFile(callback) {
			client.upload('../LICENSE', 'testing/license.md', function (err, res) {
				console.log(res);
				callback(err);
			});
		}
	], function (err) {
		if (err) {
			console.log('Error - ', err);
		} else {
			console.log('Successful');
		}
	});
});




