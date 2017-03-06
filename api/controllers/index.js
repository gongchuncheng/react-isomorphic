const router = require('express').Router();
const testController = require('./test');
const models = require('../models');
const TestM = models.TestM;

router.route('/test')
  .get(testController.Test);

module.exports = router;