const net = require('net');
const readline = require('readline');
//usr input from readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//create CLIENT
const client = new net.Socket();
rl.question('Enter Username : ', (username) => {
    //connection to server 
    client.connect(3000, 'localhost', () => {
        //usernme to server
        client.write(username + ` is join`);
    });
    //handle msg from serer
    client.on('data', (data) => {
        const message = data.toString();
        console.log(message);
    });
    //user input
    rl.on('line', (input) => {
        const message = `${username}:${input}`;
        client.write(message);
    });
    //disconnection from server
    client.on('end', () => {
        console.log('server is disconnected');
        rl.close();
    });
});
