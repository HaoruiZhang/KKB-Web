console.log("a模块");
let c = 30;
let b = 10;
// 导出多个；
export {c};
export let d = 40;

// 只能写一个
export default {
    b
}
// let obj = {b};
// export { obj as default }  // export defalut b;