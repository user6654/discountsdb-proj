const express = require('express');
const router = express.Router();
const price_rule_Route = require('./price_rule');
const discount_code_Route = require('./discount_code');

router.use('/price_rule', price_rule_Route);
router.use('/discount_code', discount_code_Route);

module.exports = router;
//localhost:3000/api/price_rule
//localhost:3000/api/discount_code