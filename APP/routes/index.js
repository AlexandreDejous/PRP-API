var express = require('express');
var router = express.Router();


var query = require('../blockchain/query');//require



/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Demo' });
  
});
router.get('/clicke', (req, res) => {
  
  async function f1(req, res) {
  var bunchOfCarData = await query.queryCar();
  res.writeHead(200,"OK",{"Content-Type":"text/html"});
  res.end(bunchOfCarData);
  
  }

  f1(req ,res);
  
});

/*router.get('/addProduct', (req, res) => {
  
  async function f1(req, res) {
  var bunchOfCarData = await query.queryCar();
  res.writeHead(200,"OK",{"Content-Type":"text/html"});
  res.end(bunchOfCarData);
  
  }

  f1(req ,res);
  
});*/





module.exports = router;
