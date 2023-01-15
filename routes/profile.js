const experss = require('express');
const router = experss.Router()
const profileController = require('../controllers/profileController');


router.get('/profile/', profileController.profile_peofile_get)
router.get('/delete/question/:quId/', profileController.deleteQu_peofile_get)







module.exports = router;