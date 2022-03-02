// push
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
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = this.head;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > length) return false;
    if (index === length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  reverse() {
    let newNode = this.head;
    this.tail = this.head;
    this.tail = newNode;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = newNode.next;
      newNode.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.get(">3");
list.get(":)");
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

// Get
// This function should accept an index
// if the index is less then zero or greater than or equal to the length of the list, return null
// Loop through the list until you reach the index and return the nide at the specific index

// set
// this function should accept  a values and index
// use your get function to find the specific node
// if the node is not found, return false
// if the node id found, set the value of the node ti be the value passed of the function and return true

// insert
// if the index is less than zero or greater than the length, return false
// if the index is the same as the length, push a new node to the end of the list
// if the index is 0, unshift a new node to the start of thr list
// otherwise, using the get method, access the node at the index -1
// set next property on that node to be the new node
// set next property on the node to be the previous next
// increment the length
// return true

// Reverse
// swap the head and tail
// create a variable called next
// create a variable called prev
// create a variable called node and initialize it to the head property
// loop through the kist
// set next to be the next property on whatever node is
// set the next property on the node to be whatever prev is
// set prev to be the values of the node variable
// set the node variable to be the values if the next variable
