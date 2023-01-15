const experss = require('express');
const router = experss.Router()
const learnController = require("../controllers/learnController");
const solveQuizController = require("../controllers/solveQuizController");


router.get('/learnning/',learnController.learn_subjectsVideo_get);
router.get('/delete/lesson/:id/',learnController.deleteLesson_subjectsVideo_get);

router.get('/addQuiz/',learnController.addQuiz_addQuiz_get);
router.post('/addQuiz/',learnController.addQuiz_addQuiz_post);
router.get('/delete/question/:id/:index/',learnController.deleteQuestion_addQuiz_get);


router.get('/quiz/choose/',solveQuizController.chooseQuiz_chooseQuiz_get);
router.get('/quiz/start/:id/',solveQuizController.solveQuiz_Quiz_get);
router.post('/quiz/end/',solveQuizController.endQuiz_Quiz_post);

router.get('/saveCookies/:id',solveQuizController.save_get);




module.exports = router;