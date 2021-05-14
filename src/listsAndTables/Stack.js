class Stack {
  //create an arry
  constructor() {
    this.items = [];
  }

  push(value) {
      //default method doesnt not exist in Java
      //note to achieve this you may need to move all the elements in the array by one
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  getSize() {
    return this.items.length;
  }
  printStack(){
      console.log(this.items)
  }
  isEmpty(){
      return this.items.length===0;
  }
  toArray(){
      return this.items.slice()
  }
}

const stack=new Stack()

for(i=0;i<5;i++){
    stack.push(i*i)
}
stack.printStack()
stack.pop()
stack.printStack()
console.log(stack.getSize())

const chores= new Stack();
chores.push('Cook dinner');
chores.push('Wash the dishes')
chores.push('Buy ingredienets');

console.log(chores.toArray());

chores.pop();
chores.pop();

console.log(chores.toArray())

