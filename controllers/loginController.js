const db = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {
  findAll: function(req, res) {
    db.UserLogin.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.UserLogin.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  checkUserPass: function(req, res) {
    const { username, password } = req.body;
    db.UserLogin.findOne({ username }, function(err, user) {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: 'Internal error please try again3'
        });
      } else if (!user) {
        res.status(401).json({
          error: 'Incorrect email or password1'
        });
      } else {
        user.isCorrect(password, function(err, same) {
          if (err) {
            res.status(500).json({
              error: 'Internal error please try again4'
            });
          } else if (!same) {
              res.status(401)
                .json({
                    error: 'Incorrect email or password2'
                });
          } else {
              const payload = { username }
              const token = jwt.sign(payload, secret, {
                  expiresIn: '2h'
              });
              res.cookie('token', token, { httpOnly: true }).sendStatus(200);
          }
        });
      }
    });
  }
};
