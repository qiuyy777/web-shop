"use strict";

const express = require('express');

const router = express.Router();

const indexCtrl = require('./controllers/index');
const userCtrl = require('./controllers/user');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ymall', { useNewUrlParser: true })

mongoose.connection.on("connected",function(){
  console.log("mongodb runs success");

});
mongoose.connection.on("error",function(){
  console.log("mongodb failed");
});

router.get('/', indexCtrl.showIndex); 

router.get('/index',indexCtrl.showIndex); 
router.get('/user', userCtrl.showUserCenter); 
router.get('/register', userCtrl.showSignup); 
router.post('/index/login', userCtrl.doLogin); 
router.get('/index/logout', userCtrl.doLogout); 


function checkLogin(req, res, next) {
  if (req.cookies.userName) {
    return res.render('index',{'userName':req.cookies.userName});
  }
  next();
}

function checkNotLogin(req, res, next) {
  if (!req.cookies.userId) {
   return res.redirect('/');
  }
  next();
}

module.exports = router;
