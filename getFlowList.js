const axios = require("axios")


function getAllFlow(currentPage = 1) {
  let result = []
  let all = 2
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

    result.push(res);
    console.log(res)
    // if (result.length < all) {
    //   currentPage++;
    //   let res = await get()
    //   eval(res.data)
    // }
  }
  async function get() {
    let res = await axios.get(`https://api.bilibili.com/x/relation/followings?vmid=${global.biliConfig.uid}&pn=${currentPage}&ps=50&order=desc&order_type=attention&jsonp=jsonp&callback=getData`, {
      headers: {
        "Referer": "https://space.bilibili.com/387323087/fans/follow?spm_id_from=333.1007.0.0",
        "cookie": "SESSDATA=" + global.biliConfig.cookie,
      }
    })
    eval(res.data)
  }
  // return result
}

module.exports = getAllFlow


    // let allPages = Math.ceil(data.total / 50)
    // let t = new Date(global.biliConfig.time).getTime() / 1000
    // let res = data.data.list.filter(r => r.mtime > t).map(d => {
    //   d.mtime = new Date(d.mtime * 1000).toLocaleString()
    //   return d
    // })