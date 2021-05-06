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
    if(!this.head){
        this.head=newNode
    }
 
  }

  outputList(){
      //loop through all elements
     this.currentNode=this.head
      while(this.currentNode!=null){
          console.log(this.currentNode)
          this.currentNode=this.currentNode.next
          
      }
  }
  toArray(){
      const elements=[]
      let currentNode=this.head
      while(currentNode!=null){
        elements.push(currentNode)
        
        currentNode=currentNode.next
      }
      return elements
  }
}

const linkedList1 = new LinkedList();
for(i=0;i<5;i++){
    linkedList1.append(i*i)
}
linkedList1.outputList()

console.log(linkedList1.toArray())
