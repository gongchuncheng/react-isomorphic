const Schema = require('mongoose').Schema;
const ObjectId = Schema.Types.ObjectId;

const TestSchema = new Schema({
    username: { type: String },
    password: { type: String }
});

TestSchema.statics = {
	save_test: function(test){
		return test.save();
	},
	find_test: function(){
		return this.find().exec();
	}
};

module.exports = TestSchema;