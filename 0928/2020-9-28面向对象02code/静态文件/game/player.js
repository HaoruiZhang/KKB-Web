import Yase from './yase.js';
export default class Player{
    constructor(username){
        this.name = username;
        this.heroes = [new Yase];
    }
}