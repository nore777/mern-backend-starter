import usernameValidation from "../usernameValidation.ts"
import emailValidation from "../emailValidation.ts"
import passwordValidation from "../passwordValidation.ts"

function registerFormValidation(username: string, email: string, password: string, repeatPassword: string, TOSPP: boolean): boolean | string {
  if (!username || !email || !password || !repeatPassword) {
    return "registerEmptyFields"
  }
  
  // terms of service and privacy policy
  if (TOSPP !== true) { 
    return "registerEmptyTOSPP"
  }

  const isUsername = usernameValidation(username)
  if (!isUsername) {
    return "registerInvalidUsername"
  }

  const isEmail = emailValidation(email)
  if (!isEmail) {
    return "registerInvalidEmail"
  }

  const isPassword = passwordValidation(password)
  if (!isPassword) {
    return "registerInvalidPassword"
  }

  if (password !== repeatPassword) {
    return "registerPasswordMatch"
  }

  return true;
}

export default registerFormValidation