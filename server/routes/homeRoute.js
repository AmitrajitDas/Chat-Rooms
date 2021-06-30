import express from 'express'
import { getAPI } from '../controllers/homeController.js'

const router = express.Router()

router.route('/').get(getAPI)

export default router