import { Request } from 'express';

interface userData {
  id: string,
  roles: string[]
}

declare global {
  namespace Express {
    interface Request {
      user?: any // TODO: define user
    }
  }
}
