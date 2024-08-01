import http from 'http';
const PORT =process.env.PORT;
const server = http.createServer((req, res) => {
    // res.write('hello world');
    // res.end();

    // res.writeHead(500,{'Content-Type':'application/json'});
    // res.end(JSON.stringify({message:"server error"}));

    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>helo world<h1/>');
});


server.listen(PORT, () => {
    console.log(`server on port ${PORT}      `);

});