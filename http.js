const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') { // Checking what url was requested
        res.write('Welcome to our home page'); // responding
        res.end();
    }
    else if (req.url === '/about') {
        res.write('Welcome to our about page');
        res.end();
    }
    else {
        res.end('<h1>Page does not exist</h1>'); // if url does not exist this will show
    }
});

server.listen(5000); // Tells it what port to listen on