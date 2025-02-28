const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
    // この例では処理が完了したことを返すだけなのでresolveには値を渡さない
    resolve()
    }, timeout)
    })
   const promiseA = () => {
    promiseSetTimeout(2000)
    .then(() => {
    console.log("★", new Date())
    return promiseSetTimeout(10000)
    })
    .then(() => {
    console.log("◆", new Date())
    return promiseSetTimeout(20000)
    })
   }
   console.log("start", new Date())
   promiseA()
   console.log("end", new Date())