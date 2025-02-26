# Setup
```bash
git clone https://github.com/nore777/mern-backend-starter
```

```bash
npm install
```

```bash
npm run dev
```

# Routes, Authentication and Authorization
All routes go in the **/routes** directory. After creating a custom route, to export it in the
**/routes/index.ts** file. It is then automatically added to Express.
Authentication and Authorization is done using two middleware functions:
```ts
authenticate()
authorize(arr: Role[])
```
The authenticate() function parses the JWT token and the authorize() function checks if the token has appropriate roles.
In order for the auth to work, you need to pass the JWT token from the client via the Authorization header.
You can of course change this to suit your needs
```ts
import { Router } from "express"
import exampleController from "../controllers/example/exampleController.ts"
import { authorize, authenticate } from "../middleware/auth.ts"

const router = Router()

// Route accesible by everyone
router.get('/example', exampleController.get)

// Route accessible only for registered users
router.post('/example/authenticate', authenticate(), exampleController.post)

// Route accessible only for a specified user role
router.delete('/example/authorize', authenticate(), authorize(['admin', 'moderator']), exampleController.delete)

export default router
```
