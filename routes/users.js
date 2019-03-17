var express = require('express');
const Sequelize = require('sequelize');
var router = express.Router();
const sequelize = new Sequelize('test', 'postgres', 'mahesh', {
  host: 'localhost',
  dialect:'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  res.send('respond with a resource');
});

module.exports = router;
