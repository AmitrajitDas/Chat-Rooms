import express from 'express'
import { userLogin, userRegister } from '../controllers/userController.js'
// import { routeProtection } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/signup').post(userRegister)
router.route('/login').post(userLogin)


export default router