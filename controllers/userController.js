const db = require("../models");

module.exports = {
  create: function(req, res) {
      db.UserLogin
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  find: function(req, res) {
      db.UserLogin
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  }
};
