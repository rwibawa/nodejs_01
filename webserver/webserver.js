const http = require('http');

const server = http.createServer(function(req,res) {
    if (req.method === 'GET' && req.url === '/favicon.ico') {
        const fs = require('fs');
        const rs = fs.createReadStream('./favicon.ico');
        rs.pipe(res);
    } else {
        console.log(`${req.method} ${req.url}`);
        res.end('Hello world!');
    }
});

const port = 9003;
server.listen(port, function() {
    console.log(`server started on port ${port}`);
})