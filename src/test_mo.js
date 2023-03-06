//import { readFile } from 'fs';
 var fs = require('fs');
 var crypto  = require('crypto');

var myMsg = "Hello world";

var funcname = function () {
    return "I am func1 function";
}

const buf = new Buffer.alloc(5, '2');
console.log(buf);

const str = '\u00bd + \u00bc = \u00be';
console.log(Buffer.byteLength(str, 'utf8'));

const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill("!");

for(let i = 0; i < 26;i++)
{
    buf1[i] = i + 97;
}

buf1.copy(buf2, 8, 16, 23);
console.log(buf2.toString());

fs.readFile('./src/file/test.txt', 'utf8', (err, data) =>{
    if(err) console.log("file fail");
    else console.log(data);
});

fs.mkdir('./demo', (err) =>{
    if(err) console.log("create dir fail");
    else console.log("create dir success");
});

fs.stat('./src/file/test.txt', (err, stats) =>{
    if(err) console.log('get file stats fail');
    else console.log(stats);
});

console.log(crypto.getCiphers());
exports.msg = myMsg;
exports.funcName = funcname;