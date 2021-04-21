$(document).ready(function(){

    $(".showletcode").click(function() {
        $(".letcode").toggle();
    });
});

var arr1 =new Array('Bob', 'Tom', 'Jane');
arr1.copyWithin(1, 0, 2);
console.log(arr1);
console.log(arr1.entries());

var arr2 = [1, 3, 6, 5, 7, 2, 9, 4];
//var arr3 = arr2.reverse();
//console.log(arr2);

if(arr2.includes(4))
{
    console.log("find the element");
    let index = arr2.indexOf(4);
    console.log(index);
}

var nameStr = arr1.join();
console.log(nameStr);

function calNUM(total, num)
{
    return total + num;
}

var sumVal = arr2.reduce(calNUM, 0);
console.log(sumVal);

var str1 ="test";
str1.toUpperCase();
var str2 = str1.repeat(3);
console.log(str2);

var str3 = str2.slice(2, 5);
console.log(str3);

let s1 = Symbol("str1");
var s2 = s1.toString();

console.log(s2);

const s3 = Symbol('test1');

let obj = {
    [s3]: 'data'
};

console.log(obj[s3]);

var getResult = (function(){
    var res = 4;
    return function() {
        return res;
    };
}());

console.log(getResult());

var memto = function(state){
    var _state = state;
    this.getState = function(){
        return _state;
    }
};

var orig = function(){
    var _state;
    this.setState = function(){
        
    };

};

function f(x, y) {
    return {x, y};
}

let ms = {};

function getItem(key) {
    return key in ms? ms[key] : null;
}

function setItem(key, value) {
    ms[key] = value;
}

var docURI = document.baseURI;
console.log(docURI);