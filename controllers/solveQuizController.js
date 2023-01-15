const experss = require("express");

const Accounts = require("../models/accountsSchema");
const Qu = require("../models/QuSchema");
const Lessons = require("../models/lessonsSchema");
const Quiz = require("../models/QuizSchema");
const cookieParser = require("cookie-parser");

const chooseQuiz_chooseQuiz_get = (req, res) => {
  if (req.cookies.userData != undefined) {
    Quiz.find((err, result) => {
      res.render("chooseQuiz", {
        title: "choose quiz",
        userData: req.cookies.userData,
        QuizData: result,
      });
    });
  } else {
    res.redirect("/login/ / /");
  }
};

const solveQuiz_Quiz_get = (req, res) => {
  Quiz.findById(req.params.id, (err, result) => {
    if (result.academicYear == req.cookies.userData.academicYear) {
      if (req.cookies.userData != undefined) {
        if (result.online == 1) {
          result.questions.sort(function () {
            return 0.5 - Math.random();
          });
          for (let i = 0; i < result.questions.length; i++) {
            let obj = result.questions[i];
            result.questions[i] = Object.entries(obj);

            result.questions[i].sort(function () {
              return 0.5 - Math.random();
            });
          }

          res.render("Quiz", {
            title: "chooquiz",
            QuizData: result,
            questions: result.questions,
          });
        } else {
          res.redirect("/quiz/choose/");
        }
      } else {
        res.redirect("/login/ / /");
      }
    } else {
      res.redirect("/quiz/choose/");
    }
  });
};
const endQuiz_Quiz_post = (req, res) => {
  Quiz.findById(req.body.id, (err, quiz) => {
    let answers = req.body;
    delete answers.id;
    answers = Object.entries(answers);

    let grade = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i][1] == "answer") {
        grade++;
      }
    }

    Accounts.findOne(
      { userName: req.cookies.userData.userName },
      (err, result) => {
        const data = {
          title: quiz.title,
          maxGrade: quiz.questions.length,
          grade: grade,
          userName: req.cookies.userData.userName,
        };

        if (result.quiz.length == 0) {
          result.quiz.push(data);
          Accounts.findOneAndUpdate(
            { userName: req.cookies.userData.userName },
            { quiz: result.quiz },
            (err, result) => {
              res.cookie("userData", result);
              res.render("grads", {
                title: "grads",
                data: data,
              });
            }
          );
        } else {
          for (let i = 0; i < result.quiz.length; i++) {
            if (result.quiz[i].title == quiz.title) {
              res.render("grads", {
                title: "grads",
                data: data,
              });
              break;
            }else{
              if (result.quiz.length-1 == i) {
                result.quiz.push(data);
                Accounts.findOneAndUpdate(
                  { userName: req.cookies.userData.userName },
                  { quiz: result.quiz },
                  (err, result) => {
                    res.cookie("userData", result);
                    res.render("grads", {
                      title: "grads",
                      data: data,
                    });
                  }
                );
                break;
              } else {
                continue;
              }
            }            
          }
        }
      }
    );
  });
};

const save_get = (req, res) => {
  Accounts.findById(req.params.id, (err, result) => {
    res.cookie("userData", result, {
      secure: true,
      maxAge: 2592000000,
    });
    res.redirect("/");
  });
};
module.exports = {
  chooseQuiz_chooseQuiz_get,
  solveQuiz_Quiz_get,
  endQuiz_Quiz_post,
  save_get,
};
