const viewNumber = (num) => {
    console.log("view", num, new Date())
   }

const callbackFuncSample1 = (num, callbackFunc) => {
    const a = 1
    const b = 2
    setTimeout(() => {
        const c = a + b
        console.log(c)
    callbackFunc(num)
    }, 2000)
    setTimeout(() => {
        console.log("end", new Date())
    }, 3000)

}

console.log("start", new Date())
callbackFuncSample1(12, viewNumber)