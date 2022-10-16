function t(s){
return s<10?"0"+s:s;
}
function aaa() {   
let time = new Date();   // 程序计时的月从0开始取值后+1   
let m = time.getMonth() + 1;   
let datetime = t(time.getFullYear()) + "-" + t(m) + "-"     
+ t(time.getDate()) + " " + t(time.getHours()) + ":"     
+ t(time.getMinutes()) + ":" + t(time.getSeconds());   
return datetime; 
}
window.exports = {
   "time": { // 注意：键对应的是 plugin.json 中的 features.code
      mode: "none",  // 用于无需 UI 显示，执行一些简单的代码
      args: {
         // 进入插件应用时调用
         enter: (action) => {
            // action = { code, type, payload }
            window.utools.hideMainWindow()
		window.utools.copyText(aaa())
            // do some thing
            window.utools.outPlugin()
         }  
      } 
   }
}
