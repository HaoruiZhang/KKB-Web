import Yase from './yase.js';
import Luban from './luban.js';
export default class Player {
    constructor(username) {
        this.name = username;
        this.heroes = [new Yase, new Luban];
    }
}