const experss = require("express");
const router = experss.Router();
const cookieParser = require('cookie-parser')
const QuSchema = require('../models/QuSchema')


const homeController = require('../controllers/homeController');


router.get("/", (req, res) => {
  if (req.cookies.userData != undefined) {
    QuSchema.find().then((QuSchemaResult) => {
      res.render("index", {
        title: "home",
        userData: req.cookies.userData,
        QuSchemaData: QuSchemaResult,
        alert: 0,
      });
    });
  } else {
    res.redirect("/login/ / /");
  }
  
});

router.post("/send/question/", homeController.sendQu_index_post)

module.exports = router;
