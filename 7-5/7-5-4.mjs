const promiseTest = (num) =>
    new Promise((resolve) => {
    resolve("Test1")
    })
   const promiseA = () => {
    promiseTest()
    .then((num) => {
    console.log(num)
    return promiseTest(num)
    })
    .then((num) => {
    console.log("New" + num)
    return promiseTest(num)
    })
   }
   promiseA()