const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', function(req, res) {
  db.select().from('price_rules').then(function(data){
    res.send(data);
  });
  //select * from "price_rule"
});

router.post('/', function (req,res) {
  db.insert(req.body).returning('*').into('price_rules').then(function(data) {
    res.send(data);
  });
  //INSERT INTO tablename(column1, column2) VALUES(column1_value, column2_value);
  //SELECT * FROM table WHERE id = inserted_row;
  res.send('hello');
});

module.exports = router;
//localhost:3000/api/price_rule