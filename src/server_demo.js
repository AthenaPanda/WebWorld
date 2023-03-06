const net =  require('net');

const server = net.createServer((sock) =>{
    console.log('client connected');
    sock.on('data', (data) => {
        console.log(data);
        console.log('received %d bytes data', sock.bytesRead);
    })
    sock.on('end', () => {
        console.log('client disconnected');
    });
    sock.po
    sock.write('hello world');
    sock.pipe(sock);
});

server.on('error', (err) => {
    console.log('err failed');
});

server.listen(8124, () => {
    console.log('server listening');
});