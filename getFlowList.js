const axios = require("axios")


function getAllFlow(currentPage = 1) {
    return new Promise((resolve, reject) => {
        let result = []
        let all = undefined
        get()

        function getData(data) {
            all = data.data.total;
            let res = data.data.list.map(d => {
                return {
                    mid: d.mid,
                    uname: d.uname,
                    mtime: d.mtime,
                    time: new Date(d.mtime * 1000).toLocaleString(),
                }
            })
            result = result.concat(res)
            if (result.length < all) {
                currentPage++;
                get()
            } else {
                resolve(result)
            }
        }
        async function get() {
            try {
                let res = await axios.get(`https://api.bilibili.com/x/relation/followings?vmid=${global.biliConfig.uid}&pn=${currentPage}&ps=50&order=desc&order_type=attention&jsonp=jsonp&callback=getData`, {
                    headers: {
                        "Referer": "https://space.bilibili.com/387323087/fans/follow?spm_id_from=333.1007.0.0",
                        "cookie": "SESSDATA=" + global.biliConfig.cookie,
                    }
                })
                eval(res.data)
            } catch (e) {
                console.log(e.data, "-------------获取关注列表失败");
                reject([])
            }
        }
    })
}

module.exports = getAllFlow