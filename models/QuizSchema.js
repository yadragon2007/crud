const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title:String,
  academicYear:String,
  questions:Array,
  studentsGrades:Array,
  // [{
  //   Qu:String,
  //   choices:[String,String,String,String]
  // }]
  online:String,
  // time:String,
});

const Quiz = mongoose.model("Quiz", quizSchema);
// exports
module.exports = Quiz;
