const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true }
});