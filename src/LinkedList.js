// like we did for sets and maps
class LinkedList {
  //when is executed
  // can we tweak to get a starting and ending value
  constructor() {
    // this.nodes=[] //dont want to do that need to resize
    this.head = null; //init null
    this.tail = null; //init null
  }
  append(value) {
    //why is new Node an Object and not a value value and pointer for next element
    const newNode = { value: value, next: null };

    if (this.tail) {
      //reach out to the old tail
      this.tail.next = newNode;
    }
    // update the tail
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  addFront(value) {
    const newNode = { value: value, next: null }; //could also set head over here would save us a step
    //check if null
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = this.head;
    }
  }

  outputList() {
    //loop through all elements
    this.currentNode = this.head;
    while (this.currentNode != null) {
      console.log(this.currentNode);
      this.currentNode = this.currentNode.next;
      //this.currentNode.next= this.currentNode
    }
  }
  toArray() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode != null) {
      elements.push(currentNode);

      currentNode = currentNode.next;
    }
    return elements;
  }
  //only find the first occurence
  hasValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  insertAfter(value, afterValue) {
    const currentNode = this.find(afterValue);
    if(currentNode){
      const newNode = { value: value, next: currentNode.next };
      currentNode.next=newNode  // if you have a typo like currentNode.nex=newNode get a really weird result
      return true;
    }
    return false


  }

  //find all occurences of the value and delete.
  delete(value) {
    // how can we reassign our new linkedlist without our other element?
    if (!this.head) {
      return null;
    } else {
      while (this.head && this.head.value == value) {
        this.head = this.head.next;
      }
      let currentNode = this.head;
      while (currentNode.next) {
        //delete elements
        if (currentNode.next.value == value) {
          //we just shift pointer to the head and next elements
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }

        //happen to delete last node
        if (this.tail.value == value) {
          this.tail = currentNode;
        }
      }
    }
  }
}

const linkedList1 = new LinkedList();
for (i = 0; i < 5; i++) {
  linkedList1.append(i * i);
}
linkedList1.addFront(365);
linkedList1.outputList();

console.log(linkedList1.toArray());

linkedList1.delete(9);

console.log(linkedList1.toArray());

console.log(linkedList1.find(4));

linkedList1.insertAfter(660,4)
linkedList1.insertAfter(true,660)

console.log(linkedList1.toArray());
