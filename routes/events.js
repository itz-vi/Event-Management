const mongoose = require("mongoose")

const eventSchema = mongoose.Schema({
  title: String,
  date: String,
});

module.exports = mongoose.model('event', eventSchema);