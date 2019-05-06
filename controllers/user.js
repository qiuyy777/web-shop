"use strict";

let User = require('./../models/user');
/* GET users listing. */
exports.showUserCenter = function (req,res,next){
    return res.render('user',{'userName':req.cookies.userName});
}
exports.doLogin = function (req,res,next) {
  var userName = req.body.userName,userPwd = req.body.userPwd;
  var userInfo = User.findOne({'userName':userName});
    userInfo.exec(function (err,doc){
      if(doc!==null){
      if(doc.userPwd === userPwd){
        res.cookie("userId",doc.userId,{
            path:'/',
            maxAge:1000*60*60
        });
        res.cookie("userName",doc.userName,{
          path:'/',
          maxAge:1000*60*60
        });
      return res.redirect('/');
      }else{
        res.json({
          status:'1'
        });
      }        
      }else{
        res.json({
          status:'2'
        });
      }
    });
}

exports.doLogout = function (req,res,next){
    res.cookie("userName","");
    return res.redirect('/');
}

exports.showSignup = function(req,res,next){
  res.render('register')
}
