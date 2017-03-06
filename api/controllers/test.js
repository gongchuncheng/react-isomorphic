const TestM = require('../models').TestM;

const TestController = {};
TestController.Test = (req, res, next) => {
	var user = new TestM({
  	    username: Math.random(),
  	    password: Math.random()
    });
    TestM.save_test(user);
	TestM.find_test().then(category => {
    	res.send(category);
    }).catch(next);
};

module.exports = TestController;