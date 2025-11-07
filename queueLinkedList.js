class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class Queue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(value){
        const newNode = new Node(value);
        if (this.isEmpty()){
            this.front = this.rear = newNode;
            this.rear.next = null;
        }
        this.rear.next = newNode
        this.rear = newNode
        this.length++
    };

    dequeue(){
        if (this.isEmpty()){
            return null
        }
        const nodeToRemove = this.front;
        this.front = this.front.next;
        if (!this.front){
            this.rear = null;
        }
        this.length--
        return nodeToRemove.value;
    }

    peek(){
        return this.front ? this.front.value : null
    }

    isEmpty(){
        return this.length === 0;
    }

    size(){
        return this.length;
    }

     print() {
    let current = this.front;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" → "));
  }
};

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek())
