
const qs = require("qs")
const axios = require("axios")

const unLike = (id) =>{
  axios.post("https://api.bilibili.com/x/relation/modify", qs.stringify({
    fid: id,
    act: 2,
    csrf: global.biliConfig.csrf
  }), {
    "headers": {
      "cookie": "SESSDATA="+global.biliConfig.cookie

    },

  }).then(data => console.log(data.data,"unlike------"))
}

module.exports = unLike




// "https://api.bilibili.com/x/relation/modify?fid=432597324&act=2&re_src=11&spmid=333.999.0.0&extend_content=%7B%22entity%22%3A%22user%22%2C%22entity_id%22%3A432597324%2C%22fp%22%3A%220%5Cu0001864%2C%2C1536%5Cu0001Win32%5Cu00014%5Cu00014%5Cu000124%5Cu00011%5Cu0001zh%5Cu00011%5Cu00010%2C%2C0%2C%2C0%5Cu0001Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F101.0.4951.67%20Safari%2F537.36%22%7D&jsonp=jsonp&csrf=e2af4823f2b7b0ade6022e1f60042daf"

// fetch("https://api.bilibili.com/x/relation/modify", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "zh,en;q=0.9,en-US;q=0.8,en-GB;q=0.7",
//     "cache-control": "no-cache",
//     "content-type": "application/x-www-form-urlencoded",
//     "pragma": "no-cache",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site"
//   },
//   "referrer": "https://space.bilibili.com/387323087/fans/follow?tagid=-1",
//   "referrerPolicy": "no-referrer-when-downgrade",
//   "body": "fid=432597324&act=2&re_src=11&spmid=333.999.0.0&extend_content=%7B%22entity%22%3A%22user%22%2C%22entity_id%22%3A432597324%2C%22fp%22%3A%220%5Cu0001864%2C%2C1536%5Cu0001Win32%5Cu00014%5Cu00014%5Cu000124%5Cu00011%5Cu0001zh%5Cu00011%5Cu00010%2C%2C0%2C%2C0%5Cu0001Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F101.0.4951.67%20Safari%2F537.36%22%7D&jsonp=jsonp&csrf=e2af4823f2b7b0ade6022e1f60042daf",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// });