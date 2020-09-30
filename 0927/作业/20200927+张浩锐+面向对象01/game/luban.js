import S1 from './skills/luban/lubanS1.js'
import S2 from './skills/luban/lubanS2.js'
import S3 from './skills/luban/lubanS3.js'

import lubanSkin1 from './skins/luban/lubanSkin1.js'
import lubanSkin2 from './skins/luban/lubanSkin2.js'
import lubanSkin3 from './skins/luban/lubanSkin3.js'

export default class Luban {
    constructor() {
        this.name = "鲁班七号";
        this.ico = "./sources/heros/luban1.png";
        this.skills = [new S1, new S2, new S3];
        this.skins = [new lubanSkin1, new lubanSkin2, new lubanSkin3];
        //console.log(this.skins);
    }
}