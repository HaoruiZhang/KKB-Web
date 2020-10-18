class Vue extends EventTarget{
    constructor(opts){
        super();
        this.opts = opts;
        this._data = opts.data;
        this.observe( this._data);
        this.compile(opts.el);
    }
    observe(data){
        let keys = Object.keys(data);
        keys.forEach(key=>{
            let value = data[key];
            Object.defineProperty(data,key,{
                configurable:true,
                enumerable:true,
                get(){
                    console.log("get");
                    return value;
                },
                set:newValue=>{
                    console.log("set");
                    //触发自定义事件编译视图；
                    this.dispatchEvent(new CustomEvent(key,{
                        detail:newValue
                    }))
                    value = newValue;
                }
            })
        })
    }
    compile(el){
        let ele = document.querySelector(el);
        this.compileNodes(ele);
    }
    compileNodes(ele){
        let childNodes = ele.childNodes;
        // console.log(childNodes);
        childNodes.forEach(node=>{
            // console.log(node);
            if(node.nodeType===1){
                // console.log("元素");
                if(node.childNodes.length>0){
                    this.compileNodes(node);
                }
            }else if(node.nodeType===3){
                // console.log("文本");
                let textContent = node.textContent;
                // console.log(textContent);
                // 查找特殊大胡子语法；
                let reg =  /\{\{\s*([^\{\}]+)\s*\}\}/g;
                // new RegExp();
            // Promise.resolve()
                // console.log(reg.$1)
                if(reg.test(textContent)){
                    // console.log("有大胡子语法");
                    let $1 = RegExp.$1;
                    // console.log( RegExp.$2);
                    // console.log($1);
                    // console.log(this._data[$1]);
                    node.textContent = node.textContent.replace(reg,this._data[$1]);

                    // 绑定事件
                    this.addEventListener($1,e=>{
                        // console.log("旧值:",this._data[$1]);
                        // console.log( "新值:",e.detail);
                        let newValue = e.detail;
                        let oldValue = this._data[$1];
                        // 旧值替换成新值；
                        let reg = new RegExp(oldValue,"g");
                        node.textContent  = node.textContent.replace(reg,newValue);
                    })

                }
            }
        })

    }



}

