const express = require('express');
const router = express.Router();
const price_rule_Route = require('./price_rule');

router.use('/price_rule', price_rule_Route);

module.exports = router;
//localhost:3000/api/price_rule