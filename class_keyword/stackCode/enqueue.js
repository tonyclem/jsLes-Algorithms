// Enqueue
// this function accepts some value
// Create a new node using that value passed to the function
// it there are no node in the queue, set this node to br the first and last property of the queue
// Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node

// Dequeue
// if there is no first property, just return null
// Store the first property in a variable
// see if the first is the same as the last (check if there is only 1 node). if so, set the first and last to be null
// if there is more than 1 node, set the first property to be the next property of first
// Decrement the size by 1
// return the value of the node dequeue

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
