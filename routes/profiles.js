const express = require('express')
const profilesCtrl = require('../controllers/profiles.js')
const middleware = require('../middleware/auth.js')

const router = express.Router()
const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)

module.exports = { router }
