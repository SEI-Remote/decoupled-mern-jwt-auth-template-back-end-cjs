const { Router } = require('express')
const profilesCtrl = require('../controllers/profiles.js')
const { decodeUserFromToken, checkAuth } = require('../middleware/auth.js')

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)

module.exports = { router }
