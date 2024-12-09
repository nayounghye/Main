const { Visitor } = require('../model');

exports.index = (req, res) => {
  res.render('user');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.post_signup = (req, res) => {};
