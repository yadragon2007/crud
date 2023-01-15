const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const lessonsSchema = new Schema({
  title:String,
  description:String,
  videoLink:String,
  filesLink:String,
  academicYear:String,
});

const Lessons = mongoose.model("Lessons", lessonsSchema);
// exports
module.exports = Lessons;
