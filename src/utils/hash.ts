import argon2 from "argon2";

export async function hashPassword(password: string): Promise<string | undefined> {
  try {
    let hashedPassword = await argon2.hash(password)
    return hashedPassword
  } catch (error) {
    throw new Error("Failed to hash password")
  }
}

export async function verifyPassword(hashedPassword: string, password: string): Promise<boolean | undefined> {
  try {
    const verify = await argon2.verify(hashedPassword, password)
    return verify
  } catch (error) {
    throw new Error("Failed to verify password")
  }
}
