// console.log("index");
// 1.研究对象（需求）2.共性问题，抽象成类（复用性）3.抽象类的共性问题---》基类（父类）4.研究类之间逻辑关系；

import Game from './game/game.js';

// 对象： 鲁班、亚瑟、玩家、技能、游戏管理类；
let game = new Game();
// Function.prototype.Decorator = function(fn,...arg){
//     this.call(game);
//     // arg 不定参；
//     fn(...arg);
// }
function decorator(fn1,fn2,skill,...arg){
    fn1.call(skill);
    fn2(...arg);
}

function hurt(num){
    console.log("造成"+num+"点伤害");
}

// let game2 = new Game();
// console.log(game===game2);
// console.log(game);
document.querySelector(".sub").onclick = function(){
    let username = document.querySelector(".username").value;
    // console.log(username);
    game.login(username);
    console.log(game);
    // 隐藏login 显示选择；
    document.querySelector(".login").style.display = "none";
    document.querySelector(".game").style.display = "block";
    // 修改名称
    document.querySelector(".chioseusername").innerHTML = username;
    renderHeroes(game.player.heroes);
}

function renderHeroes(heroes){
    console.log(heroes);
    document.querySelector(".heroView").innerHTML = "";
    heroes.forEach(hero=>{
      let heroItem =   document.createElement("div");
      heroItem.classList.add("heroItem");
      heroItem.innerHTML = `<img src="${hero.ico}" />
      <span>${hero.name}</span>`;
      document.querySelector(".heroView").appendChild(heroItem);
      heroItem.onclick = function(){
          document.querySelector(".heroShow").innerHTML = `<img src="${hero.ico}" />`
        //  渲染技能
        renderSkills(hero.skills);
        
        // 渲染皮肤；
        renderSkins(hero.skins);
      }
    })
}

function renderSkills(skills){
    document.querySelector(".skillsView").innerHTML = "";
    skills.forEach(skill=>{
        let img = document.createElement("img");
        img.src = skill.ico;
        document.querySelector(".skillsView").appendChild(img);
        img.onclick = function(){
            // skill.release.Decorator(hurt,100);
            decorator(skill.release,hurt,skill,100);
        }
    })
}

// 渲染皮肤
function renderSkins(skins){
    document.querySelector(".skinView").innerHTML="";
    skins.forEach(skin=>{
        let skinDiv = document.createElement("div");
        skinDiv.classList.add("skinItem");
        skinDiv.innerHTML = `<img src="${skin.ico}" />
        <span>${skin.name}</span>`;
        document.querySelector(".skinView").appendChild(skinDiv);
        skinDiv.onclick = function(){
            document.querySelector(".skinShow").innerHTML = `<img src="${skin.img}" />`;
        }
    })

}

// 切换 英雄 及皮肤；
document.querySelector(".heroBtn").onclick = function(){
    document.querySelector(".heroContainer").style.display = "block";
    document.querySelector(".skinContainer").style.display = "none";
}

document.querySelector(".skinBtn").onclick = function(){
    document.querySelector(".heroContainer").style.display = "none";
    document.querySelector(".skinContainer").style.display = "block";
}