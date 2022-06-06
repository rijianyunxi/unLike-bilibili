function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, time)
    })
}

module.exports = sleep

// async function a() {
//     console.log(1);
//     await sleep(3000)
//     console.log(2);
// }
// a()