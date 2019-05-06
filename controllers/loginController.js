const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.UserLogin
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.UserLogin
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    checkUserPass: function (req, res) {
        db.UserLogin
        .findOne{}
    }
}