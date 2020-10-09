// 英雄基类；
import GameEvent from './GameEvent.js';
export default class  Hero extends GameEvent{
    constructor({name,ico,skills,skins}){
        super();
        this.name = name;
        this.ico = ico;
        this.skills = skills;
        this.skins = skins;
        // 绑定自定义事件
        this.addEvent("myinit",this.init);
    }
    init(){
        console.log("初始化了");
    }
}