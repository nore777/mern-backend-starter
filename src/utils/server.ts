import { Server } from 'http'

export const startServer = (server: Server, port: number) => {
  server.listen(port, () => {
    console.log(` - [${process.env.NODE_ENV}] - `)
    console.log(`Server started successfully on port ${port}`)
  })
}
