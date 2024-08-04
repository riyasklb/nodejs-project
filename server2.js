// import { createServer } from 'http';
// const PORT = process.env.PORT;
// const user = [{
//     id: 1,
//     name: 'Sample Data1',
//     description: 'This is a sample API data.'
// }, {
//     id: 2,
//     name: 'Sample Data2',
//     description: 'This is a sample API data.'
// }, {
//     id: 3,
//     name: 'Sample Data3',
//     description: 'This is a sample API data.'
// },
// ];

// const server = createServer((req, res) => {
//     if (req.url === '/api/users' && req.method === "GET") {
//         res.setHeader('Content-Type', 'application/json');
//         res.write(JSON.stringify(user));
//         res.end();
//     }
//      else if (req.url === '/api/users' && req.method === "POST") {
//         let body = "";
//         req.on('data', (chunk) => {
//             body += chunk.toString();
//         });
//         req.on('end', () => {
//             const newuser = JSON.parse(body);
//             user.push(newuser);
//             res.statusCode = 201;
//             res.write(JSON.stringify(newuser));
//             res.end();
//         })
//     }
//     else {
//         res.statusCode = 404
//         res.setHeader('Content-Type', 'application/json');
//         res.write(JSON.stringify({ message: 'not fount' }));
//         res.end();
//     }

// });


// server.listen(PORT, () => {
//     console.log(`server on port ${PORT}`);

// });