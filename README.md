# mock-server

#### Prerequisite
* Create a folder
```
mkdir mock_server
cd mock_server
```

#### Step 1: Create a node js project
```
npm init -y or npm init
```

#### Step 2: Install json server dependency
```
npm install json-server
```

#### Step 3: Create index.js
```
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 8080 (any port number you want to use)

server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
```


#### Step 4: Create db.json
```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

#### Step 5: make changes to the scripts object in package.json
```
"start": "node index.js",
```

#### Step 6: Run the Node JS Project
```
npm run start - it will start the server.
```

#### Step 7: Test - api-endpoints
```
http://localhost:8080/posts
```

Output:
```
[
    { "id": 1, "title": "json-server", "author": "typicode" }
]
```
