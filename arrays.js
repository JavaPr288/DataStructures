const { names } = require("debug");

const name=['Max','Manu','Julie','Max'];
console.log(name[1]);
console.log(name.length)
//iteratable
for(const el of name){
    console.log(el)
}

name.push('Julie')
console.log(name.length)

// how much space was allocated

//find an element

const julieIndex=name.findIndex (el=> el==='JUlie') //vs Find
//if Julia is last element not very effective
name.splice(2,1) //remove one element after index 2 //why is this performance intensive

delete name[1];