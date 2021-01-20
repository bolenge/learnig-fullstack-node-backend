const http = require('http');
const server = http.createServer((req, res) => {
    res.end("Salut la famille !!")
})

server.listen(process.env.PORT || 3000);