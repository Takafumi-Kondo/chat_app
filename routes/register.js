var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.get('/', function(req, res, next) {
    res.render('register', {
      title: '新規会員登録'
    });
  });

  router.post('/', function(req, res) {
    User.create({
      user_name: req.body.user_name,
      password: req.body.password
    }).then(function(){
      res.redirect('/');
    });
  });

module.exports = router;