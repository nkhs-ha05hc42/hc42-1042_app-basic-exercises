const values = [1,2,3,3,3]
const valueset = new Set(values)
const value = []
for (const str of valueset) {
    value.push(str)
}
console.log(value)