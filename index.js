const fs = require('fs');
const http = require('http')

// const txt = fs.readFileSync('./txt/append.txt', 'utf-8');

// const textOut = `This is something at i added. ${txt}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('file added');

// fs.readFile('./txt/start.txt', 'utf-8', (error, data1) => {
//     console.log(data1);
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (error, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (error, data3) => {
//             console.log(data3);
//             fs.writeFile('.txt/final.txt', `${data2}\n${data3}`, 'utf-8', (error) => {
//                 console.log('final compeled');
//             });
//         })
//     })
// });

// console.log('started');

const server = http.createServer((req, res) => {
    res.end('heloo');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening');
})