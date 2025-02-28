const viewNumber = (num) => {
    console.log("view", num, new Date())
   }
const callbackFuncSample1 = (num, callbackFunc) => {
    setTimeout(() => {
        console.log("★")
    callbackFunc(num)
    }, 10000)
    setTimeout(() => {
        console.log(" ◆ ")
    callbackFunc(num)
    }, 20000)
}

console.log("start", new Date())
callbackFuncSample1(12, viewNumber)
console.log("end", new Date())