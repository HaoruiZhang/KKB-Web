export default class GameEvent{
    constructor(){
        this.handle = {};
    }
     addEvent(eventName,fn){
        // 保存事件；
        if(!(eventName in this.handle)){
            this.handle[eventName] = [];
        }
        this.handle[eventName].push(fn);
    }
    trigger(eventName){
        if(typeof this.handle[eventName] !== 'undefined'){
            this.handle[eventName].forEach(event=>{
                event();
            })
        }
    }
    // 实现一个 removeEvent方法 可以移除指定的自定义事件；
    //emit  dispath  trigger  
    // addevent  on   
}

// let newEvent = new GameEvent();
// newEvent.addEvent("myevent",fn1)
// newEvent.addEvent("myevent",fn2)
// newEvent.addEvent("myevent",fn3)
// newEvent.removeEvent("myevent",fn2);
// newEvent.trigger("myevent");  // fn1  fn3