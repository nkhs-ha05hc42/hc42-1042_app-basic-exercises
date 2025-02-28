const promiseSetTimeout = (timeout) =>
    new Promise((resolve) => {
    setTimeout(() => resolve(), timeout)
    })
   const fucn1 = () => {
    return promiseSetTimeout(0).then(() => Promise.resolve("Test1"))
   }
   const fucn2 = () => {
    return promiseSetTimeout(0).then(() => Promise.resolve("Test2"))
   }
   const fucn3 = async () => {
    Promise.all([fucn1(), fucn2()]).then(([result1, result2]) =>
    console.log(result1 + result2)
    )
   }
   fucn3()   