const router = require('express').Router()
const authCtrl = require('../controllers/auth.js')
const { decodeUserFromToken, checkAuth } = require('../middleware/auth.js')

/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/change-password', checkAuth, authCtrl.changePassword)

module.exports = router
