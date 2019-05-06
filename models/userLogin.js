const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
}, {
  versionKey: false
});

UserSchema.pre('save', next => {
  if (!this.isModified('password')) {
    return next();
  };
  bcrypt.hash(this.password, process.env.SALT)
    .then(hashPass => {
      this.password = hashPass;
      next();
    })
}, err => {
  next(err);
});

UserSchema.methods.comparePassword = function (candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return next(err);
    next(null, isMatch)
  })
}

const User = mongoose.model("login", UserSchema);

module.exports = User;