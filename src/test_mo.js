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

exports.msg = myMsg;
exports.funcName = funcname;