
const objectArray6_5_5 = [
    {
    key: "A001",
    value: "オレンジ",
    },
    {
    key: "B003",
    value: "グレープ",
    },
    {
    key: "C202",
    value: "パイナップル"
    }
    ]
const map1 = new Map(objectArray6_5_5.map(object => [object.key, object.value]))
for (const [key, value] of map1) 
{
    console.log(key, value)
}