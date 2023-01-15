//require
const Accounts = require("../models/accountsSchema.js");
const url = require("url");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");





const login_index_get = (req, res) => {
  const errType = "";
  res.render("login", {
    title: "login",
    alreadyUserName: "",
    SAcademicY: "",
    ban: 0,
    FUserN: req.params.uerName,
    FPassword: req.params.password,
  });
};



const ban_login_get = (req, res) => {
  res.render("login", {
    title: "login",
    alreadyUserName: "",
    SAcademicY: "",
    ban: 1,
    FUserN: req.params.uerName,
    FPassword: req.params.password,
  });
};



const homePage_post = (req, res) => {
  Accounts.findOne({ userName: req.body.userName })
    .then((result) => {
      if (result.ban == 0) {
        bcrypt.compare(
          req.body.password,
          result.password,
          function (err, Presult) {
            if (Presult == true) {

              let userData = result
              let password = req.body.password

              res.cookie('userData',userData ,{
                secure:true,
                maxAge:2592000000,
              })
              res.redirect('/')

            } else {
              res.redirect(`/login/%20/is-invalid/`);
            }
          }
        );
      } else {
        res.redirect(`/login/ban`);
      }
    })
    .catch((err) => {
      res.redirect(`/login/is-invalid/%20/`);
    });
};
const logout_login_get = (req ,res) => {
  res.clearCookie('userData')
  res.redirect('/')
}
module.exports = {
  login_index_get,
  homePage_post,
  ban_login_get,
  logout_login_get,
};
