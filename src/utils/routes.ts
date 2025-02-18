import { Express, Router } from "express"

export const initRoutes = (app: Express, routes: {[key: string]: Router}) => {
  Object.values(routes).forEach(route => {
    app.use(route)
  })
}
