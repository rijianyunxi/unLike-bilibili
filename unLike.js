const qs = require("qs")
const axios = require("axios")

const unLike = (info) => {
    return new Promise((resolve, reject) => {
        axios.post("https://api.bilibili.com/x/relation/modify", qs.stringify({
            fid: info.mid,
            act: 2,
            csrf: global.biliConfig.csrf
        }), {
            "headers": {
                "cookie": "SESSDATA=" + global.biliConfig.cookie

            },

        }).then(data => resolve(info.uname + "---已为你取消关注")).catch(e => { reject(info.uname + ":------取消关注失败") })
    })
}

module.exports = unLike