const Accounts = require("../models/accountsSchema.js");
const QuSchema = require("../models/QuSchema");

const profile_peofile_get = (req, res) => {
  if (req.cookies.userData != undefined) {
    QuSchema.find().then((QuSchemaResult) => {
      res.render("profile", {
        title: "profile",
        userData: req.cookies.userData,
        quizGrades:req.cookies.userData.quiz,
        QuSchemaData: QuSchemaResult,
        alert: 0,
      });
    });
  } else {
    res.redirect("/login/ / /");
  }
};

const deleteQu_peofile_get = (req, res) => {
  QuSchema.findByIdAndDelete(req.params.quId, () => {
    res.redirect("/profile/");
  });
};

module.exports = {
  profile_peofile_get,
  deleteQu_peofile_get,
};
