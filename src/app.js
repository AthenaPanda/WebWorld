var http = require('http');
var foo = require('./foo.js')

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<head><meta charset="utf-8"/></head>');
    res.end('Hello world\n');
}).listen(8080, '127.0.0.1');

console.time("test");
var user = new Object();
user.name = "Tom";
user.age = 18;

console.log('app is running at http://127.0.0.1/8080');
console.dir(user);
console.timeEnd("test");

var myFoo = new foo("Jim", 20);
console.log(myFoo.GetAge());

foo.staticName ='Tim';
foo.staticfunc();