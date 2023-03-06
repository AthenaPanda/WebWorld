$(document).ready(function(){

    $(".showletcode").click(function() {
        $(".letcode").toggle();
    });

    var $cr = $("#cr");
    var cr = $cr[0];

    $cr.click(function(){
        if(cr.checked) {
            console.log("Test Dom");
        }
    });

    // draw canvas
     /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById("canva");
    if(canvas.getContext)
    {
        var ctx = canvas.getContext("2d");
        //ctx.fillRect(100, 100, 150 ,150);
        ctx.beginPath();
        //ctx.arc(100, 100,50, 0, Math.PI*2, true);
        //ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.strokeStyle = "orange";
        ctx.stroke();
    }

    addel();
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
console.log("func name is %s", setItem.name);


const pr1 = new Promise(function(resolve, reject){
    console.log("start promisze");
});

pr1.then(function(){
    console.log("suc");
}, function(){
    console.log("fail");
});

console.log("start js");

let strVal = `test ${1 + 3}`;
console.log(strVal);
console.log(typeof(strVal));

//let nameVal = prompt("name", "Kate");
//console.log(nameVal);

let strValNum = Number("123z123");
console.log(strValNum);

let strAdd = 1 + "7";
console.log(strAdd);

let fruit = "orange";
let  otherid = Symbol("id");
let demoObj = {
    id: 1,
    age: 12,
    name: "John",
    "List 1": "stay",
    [fruit]: 1,
    [otherid]: 2
};

if("first" in demoObj){
    console.log("exist!");
}
else {
    console.log("no exist");
}

console.log(demoObj["List 1"]);

for(let key in demoObj){
    console.log(key);
}


let user = Object.assign({}, demoObj);

console.log(user.name);

function DemoCreate() { 
    this.name = "Kate";

    return {name: "Jack"};
 }

let demo1 = new DemoCreate();
console.log(demo1.name);

console.log(demo1?.test?.test1);

let numVal = 3.25;
console.log(Math.floor(numVal));
console.log(isFinite(Infinity));

let pos = fruit.indexOf("an", 0);
console.log("pos is %d", pos);

let users = [1, 3, 5, 6, 8, 15];

let user1 = users.find(function(item){
    return item > 3;
});

console.log("find the item is %d", user1);

let user2 = users.filter(function(item){
    return item > 3;
});

console.log("user2 length is %d", user2.length);

users.sort();
console.log(users);

let curDate = new Date();
console.log(curDate.getFullYear());
console.log(curDate.getTimezoneOffset());


function sayHi() {
    console.log("Hi");

    sayHi.counter++;
  }

  sayHi.counter = 0;
  sayHi();
  console.log("counter is %d", sayHi.counter);

  function slow(x) {
      console.log("the x value is %d", x);
      return (x+1);
  }

  function demoAdd(func){
      let cache = new Map();

      return function(x) {
          if(cache.has(x)) {
              return cache.get(x);
          }

          let result = func(x);
          cache.set(x, result);
          return result;
      };
  }


  let animal = {
      eat: true
  };

  let rabbit = {
      jumps: true
  };

  rabbit.__proto__ = animal;

  console.log(rabbit.eat);

  function Rabb(name){
    this.name = name;
  }

  Rabb.prototype = animal;
  let rab1 = new Rabb("Cat");
  console.log(rab1.eat);

  let rabb2 = Object.create(animal, {
      jumps: {
          value: true
      }
  });

  class User {
      constructor(name) {
          this.name = name;
      }

      sayHi() {
          console.log(this.name);
      }
  }

  console.log(typeof User);

  class UserA extends User {
      checkName() {
          if(this.name == '')
            console.log("invalid name!!");
      }
  }

console.log(arr2 instanceof Array);

let sayHiMix = {
    sayHi() {
        console.log(`Hello ${this.name}`);
    },
    sayBye() {
        console.log(`Bye ${this.name}!!`);
    }
};

class UserM  {
    constructor(name){
        this.name = name;
    }
}

Object.assign(UserM.prototype, sayHiMix);

let mUser = new UserM("Kate");
mUser.sayBye();

let json = '{"age": 30}';

try {
    let userEr = JSON.parse(json);

    if(!userEr.name){
        throw new SyntaxError("no name");
    }

    blabal();
    console.log(userEr.name);
}
catch(err) {
    if(err instanceof SyntaxError)
    {
        console.log("JSON ERR" + err.message);
    }
    else {
        throw err;
    }
}

function *genc(){
    yield 1;
    yield 2;
    return 3;
}

let ge1 = genc();
console.log(ge1.next());

function* bar() {
    yield 'x';

    /*for (let i of genc()) {
        console.log(i);
    }*/
    yield* genc();
    yield 'y';
}

for(let a of bar()) {
    console.log(a);
}


function addel() {
    let el = document.getElementsByClassName("testel");
    el[0].insertAdjacentHTML('afterbegin', '<p>hello</p>')
}

//test regexp
function testReg(specWord){
    var reg1 = /wor/g ;
    let item = specWord.search(reg1);
    console.log("idx is " + item);
}

function sort()
{
    let arr = [1, 3, 7, 2, 19, 13, 7, 3];
    for(let  i = 0; i <arr.length/2; i++){
        /*
            from left to right
        */
       let issort = true;
        for(let j = i; j < arr.length - 1 -i; j++){
            if(arr[j] > arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                issort = false;
            }
        }

        if(issort) break;
        /*
            from right to left 
        */
       issort = true;
        for(let k = arr.length - 1- i; k > i; k--)
        {
            if(arr[k]< arr[k-1])
            {
                let tmp2 = arr[k];
                arr[k] = arr[k-1];
                arr[k-1] = tmp2;
                issort = false;
            }
        }

    }
}


function quicksort(startId)
{
    let arr = [1, 3, 7, 2, 19, 13, 7, 3];

    let mark = startId;
    let privel = arr[startId];

    for(let i= 0; i< arr.length; i++){
        if(arr[i] < privel) 
        {
            mark++;
            let tmp = arr[i];
            arr[i] = arr[mark];
            arr[mark] =  tmp;
        }
    }
    
    arr[0] = arr[mark];
    arr[mark] = privel;
    return mark;

}


function quicksort_double(startId, endId)
{
    let arr = [1, 3, 7, 2, 19, 13, 7, 3];
    let priv = arr[startId];
    let left = startId, right = endId;

    while(left != right){

        while(left < right && arr[left] < priv){
            left++;
        }

        while(left < right && arr[right]> priv){
            right--;
        }

        if(left < right){
            let tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
        }
    }

    arr[startId] = arr[left];
    arr[left] = priv;
    return left;

}

var word1 = "Helloworld";
testReg(word1);


//useragent
console.log("current agent is %s", navigator.userAgent);