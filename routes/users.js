const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Eventmng");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  secret: String,
});

module.exports = mongoose.model('user', userSchema);