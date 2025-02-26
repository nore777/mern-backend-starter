import { Request, Response } from "express"
import registerFormValidation from "../../utils/validation/form/registerValidation"
import { createUser } from "../../services/userService"


const register = async (req: Request, res: Response): Promise<any> => {
  const username = req.body.username?.trim().toLowerCase()
  const email = req.body.email?.trim().toLowerCase()
  const { password, repeatPassword, newsletter, TOSPP } = req.body
  const validation = registerFormValidation(username, email, password, repeatPassword, TOSPP)

  try {
    if (validation !== true) {
      return res.status(400).json({ message: validation })
    }
    const user = await createUser(username, email, password)
    return res.status(201).json({ message: "registerSuccess" })
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

export default {
  register,
}
