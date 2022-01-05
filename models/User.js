const mongoose = require("mongoose");

const schema = mongoose.Schema;
const userSchema = new schema({
  name: String,
  isAdmin: { type: Boolean, default: false },
  email: { type: String, unique: true },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
