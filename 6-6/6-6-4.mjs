const map6_6_4 = new Map()
map6_6_4.set("A","カレー")
map6_6_4.set("B","定食")

for (const [key, value] of map6_6_4) {
    console.log(key, value)
}

map6_6_4.delete("A")

console.log(map6_6_4.has("A"))
console.log(map6_6_4.has("B"))