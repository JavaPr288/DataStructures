mapInfo= new Map()
mapInfo.set('name','max')
mapInfo.set(true,true)
console.log(mapInfo)

const resultData= new Map();

resultData.set('average',1.52)

resultData.set('lastResult',undefined)

const germany={name:'Germany',population:82}
resultData.set(germany,0.89)

for (el of resultData ){
    console.log(el)
}

//set average again

resultData.set('avergae',33.89)
console.log(resultData)


resultData.get("average")

resultData.delete(germany)

console.log(resultData.has('average'))

console.log(resultData)