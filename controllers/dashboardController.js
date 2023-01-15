const Accounts = require("../models/accountsSchema.js");
const QuSchema = require("../models/QuSchema");
const Lessons = require("../models/lessonsSchema");
const IP = require("ip");
const ytdl = require("ytdl-core");
const { findByIdAndDelete } = require("../models/accountsSchema.js");

const dashboard_dashboard_get = (req, res) => {
  if (req.cookies.userData.admin == "1") {
    Accounts.find()
      .then((AccountsResult) => {
        QuSchema.find()
          .then((QuSchemaResult) => {
            res.render("dashbord", {
              title: "dash board",
              userData: req.cookies.userData,
              AccountsData: AccountsResult,
              QuSchemaData: QuSchemaResult,
              QuizData:req.cookies.Quiz,
              alert: 0,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.render("404", { title: "not found" });
  }
};

const ban_dashboard_post = (req, res) => {
  Accounts.findById(req.body.id)
    .then((result) => {
      if (result.ban == "0") {
        Accounts.findByIdAndUpdate(req.body.id, { ban: "1" }).then((result) => {
          res.redirect("/dashboard/");
        });
      } else {
        Accounts.findByIdAndUpdate(req.body.id, { ban: "0" }).then((result) => {
          res.redirect("/dashboard/");
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
const admin_dashboard_post = (req, res) => {
  Accounts.findById(req.body.id)
    .then((result) => {
      if (result.admin == "0") {
        Accounts.findByIdAndUpdate(req.body.id, { admin: "1" }).then(
          (result) => {
            res.redirect("/dashboard/");
          }
        );
      } else {
        Accounts.findByIdAndUpdate(req.body.id, { admin: "0" }).then(
          (result) => {
            res.redirect("/dashboard/");
          }
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const reply_dashboard_post = (req, res) => {
  const data = req.body;
  QuSchema.find().then((QuSchemaResult) => {
    QuSchema.findByIdAndUpdate(
      QuSchemaResult[data.id].id,
      { reply: data.reply, answered: "1" },
      (err, result) => {
        res.redirect("/dashboard/");
      }
    );
  });
};

const addVideo_dashBoard_post = (req, res) => {
  const newLesson = new Lessons(req.body);

  ytdl.getInfo(req.body.videoLink).then((info) => {

    newLesson.title = info.videoDetails.title;
    newLesson.description = info.videoDetails.description;
    if (newLesson.academicYear != "0") {
      newLesson.save().then(() => {
        res.redirect("/dashboard/");
      });
    }
  });
};

module.exports = {
  dashboard_dashboard_get,
  ban_dashboard_post,
  admin_dashboard_post,
  reply_dashboard_post,
  addVideo_dashBoard_post,
};
