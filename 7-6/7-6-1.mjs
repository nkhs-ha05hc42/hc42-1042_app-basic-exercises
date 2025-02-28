const promiseSetTimeout = (timeout) =>
    new Promise((resolve) => {
    setTimeout(() => resolve(), timeout)
    })
   const promiseTestA = async () => {
    await promiseSetTimeout(10000)
    console.log("★", new Date())
   }
   const promiseTestB = async () => {
    await promiseSetTimeout(20000)
    console.log("◆", new Date())
   }
   const promiseA = async () => {
    const [result1, result2] = await Promise.all([promiseTestA(), promiseTestB()])
   }
   console.log("start", new Date())
   promiseA()
   console.log("end", new Date())