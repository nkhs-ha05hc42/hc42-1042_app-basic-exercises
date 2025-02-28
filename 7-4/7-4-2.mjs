const viewNumber = (num) => {
    console.log("view", num, new Date())
   }
const callbackFuncSample1 = (num, callbackFunc) => {
    setTimeout(() => {
        console.log("★")
    callbackFunc(num)
    }, 2000)
    setTimeout(() => {
        console.log(" ◆ ")
    callbackFunc(num)
    }, 3000)
    setTimeout(() => {
        console.log("end", new Date())
    },5000)

}

console.log("start", new Date())
callbackFuncSample1(12, viewNumber)