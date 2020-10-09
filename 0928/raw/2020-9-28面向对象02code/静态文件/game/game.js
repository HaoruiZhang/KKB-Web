import Player from './player.js';
class Game{
    constructor(){
        this.player = null;
    }
    login(username){
        // this.player = {
        //     username,
        //     heroes:[{name:"",skills:[{},{}]},{name:"",skills:[{},{}]}],
        // }
        this.player = new Player(username);
        this.player.heroes.forEach(hero=>{
            // 触发自定义事件
            hero.trigger("myinit");
        })
    }
}

// 暗号 
// 扩展一个鲁班类 实现亚瑟的功能；

function getSingle(fn){
    // 缓存；pipe  compose  组合函数；
    let instance;
    return function(...arg){
        // arguments;
        if(!instance){
            instance = new fn(...arg);
        }
        return instance;
    }
}

export default getSingle(Game);