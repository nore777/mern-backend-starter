import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { Role } from '../types/role'

// Verifies the validity of the JWT, stores user information in Request object
export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  let token = req.headers.authorization
  const key = process.env.JWT_KEY as string

  if (token?.startsWith("Bearer ")) {
    token = token.split(" ")[1]

    jwt.verify(token, key, (error, decoded: any) => {
      if (error) {
        return res.status(401).json({ message: 'JWTInvalidToken' })
      }

      req.user = { id: decoded.id, roles: decoded.roles }
      return next()
    })

  } else {
    return res.status(401).json({ message: 'JWTInvalidHeader' })
  }
}

// Checks for appropriate roles from the request's user object
export const authorize = (requiredRoles: Role[]) => async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const userRoles = req.user?.roles

  if (!userRoles) {
    return res.status(403).json({ message: 'JWTNoRoles' })
  }

  const hasRole = requiredRoles.some(role => userRoles.includes(role))

  if (!hasRole) {
    return res.status(403).json({ message: 'JWTInvalidRoles' })
  }

  return next()
};
