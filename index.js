// creating a server.
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 8080


server.use(middleware);
server.use(router);


// listening the server
server.listen(port);







