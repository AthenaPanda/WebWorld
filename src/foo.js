var _name, _age;
var name ='', age=0;

var foo = function(name, age) {
    _name = name;
    _age = age;
}

foo.prototype.GetName = function(){
    return _name;
}

foo.prototype.GetAge = function(){
    return _age;
}

foo.prototype.SetName = function(name){
    _name = name;
}

foo.prototype.SetAge = function(age){
    _age = age;
}

foo.staticName ='';

foo.staticfunc = function(){
    console.log(foo.staticName);
    console.log(module.id);
    console.log(module.loaded);
}

foo.prototype.age =age;
foo.prototype.name = name;
module.exports = foo;