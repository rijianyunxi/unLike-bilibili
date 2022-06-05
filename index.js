const {cookie,uid,csrf,time} = require("./config")
const unLike = require("./unLike")
const getAllFlow = require("./getFlowList")



function init(){
    toGlobal()
    getAllFlow()
    // console.log(global.biliConfig)
    // console.log(getAllFlow());
    // 432597324
    // unLike(432597324)
}
init()
function toGlobal(){
    global.biliConfig = {cookie,uid,csrf,time}
}