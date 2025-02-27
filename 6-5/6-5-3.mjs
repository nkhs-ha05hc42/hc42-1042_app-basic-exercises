let sum = 0;
let count = 0;

for(let i = 1; i < 101; i++) {
    if(i % 2 === 0) {
        sum = i + sum;
        if(sum >= 50) {
            break
        }
    }
    count = count + 1;
}
console.log(sum,count)