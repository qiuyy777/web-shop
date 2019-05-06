"use strict";

let User = require('./../models/user');
/* GET users listing. */

exports.showIndex = function (req, res, next) {
  return res.render('index',{'userName':req.cookies.userName});
};


