function getCoojie(key){
    let cookies = document.cookie;
    if(!cookies)return;
    let obj = {}
    cookies.split(";").forEach(item=>{
        obj[item.split("=")[0].trim()] = item.split("=")[1]
    })
    if(key){
        return obj[k]
    }
    return obj
}
getCoojie(key)