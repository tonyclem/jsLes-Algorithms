// Pushing
//create a new node with the values passed to the function
// if the head property is null set the head and tail to be the newly create node
// if not, set the next property on the tail to be that node
// set the previous property on the newly created node to be the tail
// set the tail to be the newly created node
// increment the length
// return the doubly lined list

// Popping
// if there is no head, return undefined
// store the current tail in a variable to return later
// if the length is 1, set the head and tail to be null
// Update the tail to be the (previous node).
// set the newTail's next to null
// Decrement the length
// Return the values removed

// Shift
// if length is 0, return undefined
// Store the current head property in a variable
// if the length is one : set the head to be null: set the tail to be null
// update the head to be the next of the old head
// set the head's prev property to null
// set the old head's next to null
// decrement the length
// return old head

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      this.oldHead = null;
    }
    this.length--;
    return oldHead;
  }
}
