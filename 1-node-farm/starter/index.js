const fs = require('fs');
const http = require('http');
///////////////////////////

// const textin = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textin)

// const textout = `This is what we know about avocado ${textin} Createed on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textout);

// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//   console.log(data)
// })

const server = http.createServer((req, res) => {
  res.end('Hello from httpserver')
})

server.listen(9999, 'localhost', () => {
  console.log('server running')
})