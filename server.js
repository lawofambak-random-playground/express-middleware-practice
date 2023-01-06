const express = require('express');
const server = express();
const port = 3000;

// Simple middleware function
server.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
})

server.get('/', (req, res) => {
    res.send(
        `<div>
            <h1>Hello World</h2>
            <h4>Requested at ${req.requestTime}</h4>
        </div>`
    );
});

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});