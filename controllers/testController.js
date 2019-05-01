const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.TestData
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.TestData
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.TestData
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.TestData
            .findOneAndUpdate({
                _id: req.params.id
            }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.TestData
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    seed: function (req, res) {
        db.TestData
            .then(db.Book.insertMany(
                [
                {
                    username: "Allen",
                    password: "tests1",
                    date: new Date(Date.now())
                },
                {
                    username: "Brian",
                    password: "tests2",
                    date: new Date(Date.now())
                },
                {
                    username: "Pat",
                    password: "tests1",
                    date: new Date(Date.now())
                }
            ]
            ))
            .then(data => {
                console.log(data.result.n + "records inserted!");
                process.exit(0);
            })
            .catch(err => {
                console.error(err);
                process.exit(1);
            });
    }
};