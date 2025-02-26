import User from "../models/userModel";
import jwt from 'jsonwebtoken'
import { hashPassword, verifyPassword } from "../utils/hash";

export async function createUser(username: string, email: string, password: string): Promise<any> {
  try {
    const hashedPassword = await hashPassword(password)
    if (!hashedPassword) {
      throw new Error("PASSWORD HASH FAILED")
    }

    const user = new User({ username, email, password: hashedPassword })
    await user.save();

    return user

  } catch (error) {
    console.log(error)
    throw error;
  }
}

export async function userLogin(username: string, password: string): Promise<string | undefined> {

  try {
    const user = await User.findOne({ username })
    if (user) {
      const verify = await verifyPassword(user.password, password)
      if (verify) {
        const token = jwt.sign({ id: user._id, roles: user.roles }, process.env.JWT_KEY as string)
        return token
      }
    }

    return
  } catch (error) {
    console.log(error)
    throw error
  }
}
