const person={firstName:'Max',age:31, hobbies:['Sports','Cooking']}
//cant loop through or access elements by index
// person[1], for (el in person)
console.log(person['firstName'])

console.log(person['fistName'])

console.log(person.firstName)

//duplicate age

const duplicateValues={age:43,age:54}

console.log(duplicateValues.age)

//add  person lastName

person.lastName="Schwartz"
console.log(person)

delete person.age;

console.log(person)
//add a function
person.greet=function(){
    console.log("Hi I am"+ this.firstName)
}
person.greet()