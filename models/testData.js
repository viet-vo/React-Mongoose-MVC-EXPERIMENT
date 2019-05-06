const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
require("dotenv").config();
const SALT = parseInt(process.env.SALT, 10);

const dataSchema = new Schema(
  {
    username: {
      type: String,
      require: false,
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

dataSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) {return next()};
  bcrypt.hash(user.password, SALT).then((hashedPassword) => {
      user.password = hashedPassword;
      next();
  })
}, function (err) {
  next(err)
})

dataSchema.methods.comparePassword = function (candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return next(err);
    next(null, isMatch)
  })
}

const Test = mongoose.model("test", dataSchema);

module.exports = Test;
