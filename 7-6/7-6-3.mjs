const promiseSetTimeout = (timeout) =>
    new Promise((resolve) => {
    setTimeout(() => resolve(), timeout)
    })
   const promiseTestA = async () => {
    await promiseSetTimeout(2000)
    console.log("★", new Date())
   }
   const promiseTestB = async () => {
    await promiseSetTimeout(5000)
    console.log("◆", new Date())
   }
   const promiseTestC = async () => {
    await promiseSetTimeout(5100)
    console.log("end", new Date())
   }
   const promiseA = async () => {
    const [result1, result2, result3] = await Promise.all([promiseTestA(), promiseTestB(), promiseTestC()])
    console.log(result1,result2,result3)
   }
   console.log("start", new Date())
   promiseA()