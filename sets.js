set=new Set()
set.add('pizza')
set.add('burger');
set.add('pizza')

console.log(set)

//order can be different why. Size and Length adjusted dynamically

//deletion and finding elements is fast because order doesnt matter hashing of elements
// store data more efficiently internally

const ids= new Set([1,1]);
//can have mixed types of data
ids.add('abc')
ids.add(2)
ids.add(1)
ids.add('bb2')

for (const el of ids){
    console.log(el)
}
//cant do console.log(ids[1])

console.log(ids.has(1))

ids.add(33)

ids.delete(1)

console.log(ids)
