const { Router } = require('express')
const authCtrl = require('../controllers/auth.js')
const { decodeUserFromToken, checkAuth } = require('../middleware/auth.js')

const router = Router()

/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/change-password', checkAuth, authCtrl.changePassword)

module.exports = { router }
