const net = require('net');
//store client socket
let client = [];
//TCP server
const server = net.createServer((csocket) => {
    // console.log(`New Client connection from ${csocket.remoteAddress}:${csocket.remotePort}`);
    // console.log("Connected");
    //new client socket to arr
    client.push(csocket);
    //message form client
    csocket.on('data', (data) => {
        client.forEach((socket) => {
            socket.write(data);
        })
        console.log(data.toString());
    })
})
server.listen(3000, () => console.log('Server is listening on port Number 3000'));