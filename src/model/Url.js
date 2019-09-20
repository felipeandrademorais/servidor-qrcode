const mongoose = require("mongoose");

const Url = new mongoose.Schema({
  url: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("Url", Url);
