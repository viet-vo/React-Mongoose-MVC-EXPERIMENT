const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.UserLogin
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.UserLogin
      .find(req.query)
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};