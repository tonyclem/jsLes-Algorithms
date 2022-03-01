// This function should accept a value
// Create a new node using the value passes to the function
// if there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the next property on the tail to be new node and set the tail property on the list to be the newly create node
// increment the length by one
// piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // shift
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
console.log(list);

// pop
// if there are no nodes in list, return undefined
// loop through the list until you reach the tail
//  set the next property of the 2nd to last node
// Decrement the length of the list by 1
// return the values of the node removed

// Shift
// if there are no node, return undefined
// store the current head property in a variable
// set the head property to be the current head's next property
// decrement the length by 1
// return the value of the node removed

// unshift
// this function should accept a (value) ?
// create a new node using the value passed to the function
// if there is no head property on the list, set the head and tail to be the newly created node
// otherwise set the newly created node's next property to be the current head property on the list
// set the head property on the list ti be that newly created node
// increment the length of the list by 1
// return the linked list
