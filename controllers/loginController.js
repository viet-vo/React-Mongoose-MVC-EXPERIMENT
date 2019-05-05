const db = require("../models");

module.exports = {
    findUserNames: function (req, res) {
        db.UserLogin
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // checkUserPass: function (req, res) {
    //     db.UserLogin
    // }
}