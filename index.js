const { cookie, uid, csrf, time } = require("./config")
const unLike = require("./unLike")
const getAllFlow = require("./getFlowList")
const toGlobal = require("./toGlobal")

async function init() {
    toGlobal({ cookie, uid, csrf, time })
    const utime = new Date(global.biliConfig.time).getTime() / 1000;
    let allList = await getAllFlow();
    let res = allList.filter(item => utime < item.mtime);
    for (let i = 0; i < res.length; i++) {
        if (res[i]) {
            try {
                let r = await unLike(res[i])
                console.log(r);
            } catch (e) {
                console.log(e)
            }
        }
    }
}
init()