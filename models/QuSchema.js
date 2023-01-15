const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const questionSchema = new Schema({
  AccData: Object,
  question: String,
  reply: String,
  answered: String,
});

const question = mongoose.model("question", questionSchema);
// exports
module.exports = question;
