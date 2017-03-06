var mongoose = require('mongoose');
var config = require('../config');

const env = process.env.NODE_ENV || 'development';

if (env == 'test') {
    mongoose.connect(config.testMongodb, config.options, function(err, res){
		if(err) {
		    console.log('[mongoose log] Error connecting to: ' + config.testMongodb + '. ' + err);
		}else{
		    console.log('[mongoose log] Successfully connected to: ' + config.testMongodb);
		}
    });
} else {
    mongoose.connect(config.mongodb, config.options, function(err, res){
		if(err) {
		    console.log('[mongoose log] Error connecting to: ' + config.mongodb + '. ' + err);
		}else{
		    console.log('[mongoose log] Successfully connected to: ' + config.mongodb);
		}
    });
}

exports.TestM   = mongoose.model('TestM', require('./test'));