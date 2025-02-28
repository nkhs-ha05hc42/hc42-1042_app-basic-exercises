const promiseSetTimeout = (timeout) =>
    new Promise((resolve) => {
    setTimeout(() => resolve(), timeout)
    })
   const fucn1 = async () => {
    await promiseSetTimeout(2000)
    return console.log("Test1", new Date())
   }
   const fucn2 = async () => {
    await promiseSetTimeout(5000)
    return console.log("Test2", new Date())
   }
   const fucn3 = async () => {
    const [result1, result2] = await Promise.all([fucn1(), fucn2()])
    console.log(result1,result2)
   }
   console.log("start", new Date())
   fucn3()