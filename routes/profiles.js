const router = require('express').Router()
const profilesCtrl = require('../controllers/profiles.js')
const { decodeUserFromToken, checkAuth } = require('../middleware/auth.js')

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)

module.exports = router
