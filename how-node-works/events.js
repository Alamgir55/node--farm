const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on('newSales', () => {
    console.log('There was a new sale!');
})

myEmitter.on('newSales', () => {
    console.log('CUstomer');
})

myEmitter.on('newSales', stocks => {
    console.log(`There are now ${stocks} terms letf in stock`);
})

myEmitter.emit('newSales', 9);


const server = http.createServer();

server.on('request', (req, res) => {
    console.log('request recived');
    res.end('request received');
});

server.on('request', (req, res) => {
    ('another request');
})

server.on('close', () => {
    console.log('server closered');
})

server.listen(8000, '127.0.0.1', ()=> {
    console.log('waiting for request');
})