// creating a server.
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 8080


server.use(middlewares)
server.use(router)

// listening the server
server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})