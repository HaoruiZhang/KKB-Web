console.log("我是Ma.js");
let a = 10;
class Person{
    constructor(){
        this.name = "张三";
    }
    hobby(){
        console.log("打篮球");
    }
}

module.exports = {
    a,
    Person
}