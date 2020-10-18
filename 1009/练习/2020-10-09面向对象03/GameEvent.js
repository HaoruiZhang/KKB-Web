class GameEvent{
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
    removeEvent(eventName,fn){
        if(typeof this.handle[eventName] === 'undefined'){
            return 
        }
        for(let i=0;i<this.handle[eventName].length;i++){
            // this.handle["myevent"]  -> [fn1,fn2]
            // fn1,fn2  --> fn1===?fn2 不删除   fn2 ===fn2  删除；
            if(this.handle[eventName][i]===fn){
                // 移除事件
                this.handle[eventName].splice(i,1);
                break;
            }
        }
    }
}

function fn1(){
    console.log("fn1...");
}
function fn2(){
    console.log("fn2....");
}

let newEvent = new GameEvent();
newEvent.addEvent("myevent",fn1)
newEvent.addEvent("myevent",fn2)
// newEvent.addEvent("myevent",fn3)
// removeAllEvent
newEvent.removeEvent("myevent",fn1);
newEvent.trigger("myevent");  // fn1  fn3