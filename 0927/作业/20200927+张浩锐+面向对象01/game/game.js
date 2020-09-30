import Player from './player.js';
export default class Game{
    constructor(){
        this.player = null;
    }
    login(username){
        // this.player = {
        //     username,
        //     heroes:[{name:"",skills:[{},{}]},{name:"",skills:[{},{}]}],
        // }
        this.player = new Player(username);
    }
}

// 暗号 
// 扩展一个鲁班类 实现亚瑟的功能；