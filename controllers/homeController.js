const question = require("../models/QuSchema");
const Accounts = require("../models/accountsSchema.js");
const cookieParser = require("cookie-parser");

const sendQu_index_post = (req, res) => {
  const newquestion = new question(req.body);

  if (req.body.qu != "") {
      newquestion.AccData = {
        userName:req.cookies.userData.userName,
        firstName:req.cookies.userData.firstName,
        lastName:req.cookies.userData.lastName,
        academicYear:req.cookies.userData.academicYear,
      };
      newquestion
        .save()
        .then(() => {
          res.redirect('/')
        })
        .catch((err) => {
          console.log(err);
        });
  } else {
  }
};

module.exports = {
  sendQu_index_post,
};
