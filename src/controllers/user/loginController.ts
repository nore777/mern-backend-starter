import { Request, Response } from "express"
import { userLogin } from "../../services/userService"

const login = async (req: Request, res: Response): Promise<any> => {
  const { username, password } = req.body

  try {
    const token = await userLogin(username, password)
    if (token) return res.status(200).json({ token })
    return res.status(404).json({ message: "loginFailed" })

  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

export default {
  login,
}
