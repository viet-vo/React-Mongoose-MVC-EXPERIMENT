const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: ""
    },
    lastName: {
      type: String,
      default: ""
    },
    Email: {
      type: String,
      default: ""
    },
    password: {
      type: String,
      default: ""
    },
    isDeleted: {
      type: Boolean,
      default: ""
    }
  },
  {
    versionKey: false
  }
);

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.CompareSync(password, this.password);
};

const User = mongoose.model("user", UserSchema);

module.exports = User;
