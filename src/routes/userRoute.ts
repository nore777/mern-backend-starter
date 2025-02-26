import { Router } from "express"
import loginController from "../controllers/user/loginController"
import registerController from "../controllers/user/registerController"

const router = Router()

// login page endpoints
router.post('/user/login', loginController.login)

// register page endpoints
router.post('/user/register', registerController.register)


export default router
