// console.log("index");
// 1.研究对象（需求）2.共性问题，抽象成类（复用性）3.抽象类的共性问题---》基类（父类）4.研究类之间逻辑关系；

import Game from './game/game.js';

// 对象： 鲁班、亚瑟、玩家、技能、游戏管理类；
let game = new Game();
// console.log(game);
document.querySelector(".sub").onclick = function() {
        let username = document.querySelector(".username").value;
        // console.log(username);
        game.login(username);
        console.log(game);
        // 隐藏login 显示选择；
        document.querySelector(".login").style.display = "none";
        document.querySelector(".game").style.display = "block";
        document.querySelector(".skinShow").style.display = "none";
        // 修改名称
        document.querySelector(".chioseusername").innerHTML = username;
        renderHeroes(game.player.heroes);
    }
    /*
    document.querySelector(".skinBtn").onclick = function() {
        document.querySelector(".heroView").style.display = "none";
        document.querySelector(".skinView").style.display = "block";
    }
*/
function renderHeroes(heroes) {
    console.log(heroes);
    document.querySelector(".heroView").innerHTML = "";
    heroes.forEach(hero => {
        let heroItem = document.createElement("div");
        heroItem.classList.add("heroItem");
        heroItem.innerHTML = `<img src="${hero.ico}" />
      <span>${hero.name}</span>`;
        document.querySelector(".heroView").appendChild(heroItem);
        heroItem.onclick = function() {
            document.querySelector(".heroShow").innerHTML = `<img src="${hero.ico}" />`
                //  渲染技能
            renderSkills(hero.skills);
            //渲染皮肤（待完善）
            renderSkins(hero.skins);

        }
    })
}

function renderSkills(skills) {
    document.querySelector(".skillsView").innerHTML = "";
    skills.forEach(skill => {
        let img = document.createElement("img");
        img.src = skill.ico;
        document.querySelector(".skillsView").appendChild(img);
    })
}


//渲染皮肤代码，未完善，目前仅能展示默认皮肤
function renderSkins(skins) {
    let rawSkin = skins[0];
    //console.log(rawSkin);
    document.querySelector(".skinShow").innerHTML = `<img src="${rawSkin.ico}" /><p class="skinName">${rawSkin.name}<p/>`
    document.querySelector(".skinShow").style.display = "block";


}