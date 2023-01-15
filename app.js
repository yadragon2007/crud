const experss = require('express')
const app = experss();
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

let port = 8080;
// require
const Home = require('./routes/home')
const login = require('./routes/login')
const createAcc = require('./routes/creatAcc')
const dashbord = require('./routes/dashbord')
const profile = require('./routes/profile')
const learnning_quiz = require('./routes/learnning&quiz')



//---------------------------------------------------------------------------------------------------------------------------//
// folder & files
app.set('view engine', 'ejs')
app.use(experss.static('public'))
app.use(experss.urlencoded({ extended: true }));
let url = require('url');
//---------------------------------------------------------------------------------------------------------------------------//

// auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
//---------------------------------------------------------------------------------------------------------------------------//
// connect to data base
const mongoose = require('mongoose');
const Accounts = require('./models/accountsSchema');
const Question = require("./models/QuSchema");

mongoose.connect("mongodb+srv://arabicPlatform:GcRkD1QI1JE71BNM@cluster0.3bdx6kn.mongodb.net/platformData?retryWrites=true&w=majority")
  .then((result) => {
    app.listen(process.env.PORT || port, () => {
      console.log("http://127.0.0.1:8080/")
    })
  })
  .catch((err) => {
    console.log(err);
  });
//-------------------------------------------------------------------------------------------------------------------------//
//helmet
app.use(helmet());
//cookie
app.use(cookieParser());
//-------------------------------------------------------------------------------------------------------------------------//
//home page
app.use(Home)
//login
app.use(login)
//create acc
app.use(createAcc)
//dashbord
app.use(dashbord)
//profile
app.use(profile)
//learnning_quiz
app.use(learnning_quiz)
//404
app.use((req, res) => {
  res.status(404).render('404',{title: 'not found'})
})