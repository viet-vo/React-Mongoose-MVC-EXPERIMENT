const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    username: {
      type: String,
      require: false
    },
    password: { 
      type: String, 
      require: false 
    },
    date: { 
      type: Date, 
      default: Date.now 
    }
  },
  {
    versionKey: false
  }
);

const Test = mongoose.model("test", dataSchema);

module.exports = Test;
