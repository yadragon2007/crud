const experss = require('express');
const router = experss.Router()
const ceratAccController = require("../controllers/createAccController");


router.get('/createaccount/:user/:select/',ceratAccController.createaccount_createaccount_get);
router.post('/createaccount/create/',ceratAccController.createaccount_post);

module.exports = router;