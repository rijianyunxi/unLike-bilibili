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
            // {"code":0,"message":"0","ttl":1}
        }).then(data => {
            if (data.data.code === 0 && data.data.message === "0") {
                resolve({
                    msg: info.uname + "---已为你取消关注",
                    data: data.data
                })
            } else {
                resolve({
                    msg: info.uname + "---取消关注失败",
                    data: data.data
                })
            }

        }).catch(e => {
            reject({
                msg: info.uname + "---取消关注失败",
                data: e.data
            })
        })
    })
}

module.exports = unLike