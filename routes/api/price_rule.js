const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', function(req, res) {
  db.select().from('price_rules').orderBy('id').then(function (data) {
    res.send(data);
  });
  //select * from "price_rules"
});

router.post('/', function (req,res) {
  db.insert(req.body).returning('*').into('price_rules').then(function(data) {
    res.send(data);
  });
  //INSERT INTO tablename(column1, column2) VALUES(column1_value, column2_value);
  //SELECT * FROM table WHERE id = inserted_row;  
});

//idempotence

router.patch('/:id', function(req,res) { //put shouldnt have to be always idempotent
  db('price_rules').where({ id: req.params.id }).update(req.body).returning('*').then(function(data) {
    res.send(data);
  });
  //SELECT * FROM <database> WHERE <id>   
});
//localhost:3000/api/price_rule/<id>

router.put('/:id', function(req,res) {  //put should always be idempotent
  db('price_rules').where({ id: req.params.id }).update({
    title: req.body.title || null,
    is_done: req.body.is_done || null
  }).returning('*').then(function (data) {
    res.send(data);
  });
  //SELECT * FROM <database> WHERE <id>    
});
//localhost:3000/api/price_rule/<id>

router.delete('/:id', function (req, res) {
  db('price_rules').where({ id: req.params.id }).del().then(function () {
    res.json({ success: true });
  });
});

router.get('/:id', function(req,res){
  db('price_rules').where({id: req.params.id}).select().then(function(data) {
    res.send(data);
  });
});

module.exports = router;
//localhost:3000/api/price_rule