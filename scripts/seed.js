const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    "mongodb://tests1:tests1@ds147446.mlab.com:47446/working-title", { useNewUrlParser: true }
);

const bookSeed = [
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
];

db.TestData.collection.insertMany(bookSeed)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
