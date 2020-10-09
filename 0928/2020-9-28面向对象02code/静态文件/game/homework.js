import GameEvent from './GameEvent.js';
//仙人掌；
let newGame = new GameEvent();

let fn1 = function(){
    console.log("使用了fn1");
}
let fn2 = function(){
    console.log("使用了fn2");
}
newGame.addEvent("greenTest", fn1);
newGame.addEvent("greenTest", fn2);

//newGame.trigger("greenTest", fn1);
//console.log(newGame.handle);
newGame.removeEvent("greenTest", fn2);
newGame.trigger("greenTest");



 