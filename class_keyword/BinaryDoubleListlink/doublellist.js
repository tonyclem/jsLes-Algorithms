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

// unshift
// create a new node with the values passed to the function
// if the length is 0: set the head to be new node: set the tail to be new node
// Otherwise set the prev property on the head of the list to be thr new node
// set the next property on the new node to be the head property
// update the head to be the new node
// increment the length
// return list

// get
// if the index is less than 0 or greater or equal to the length, return null
// if the index is less than or equal to half the length of the list
// loop through the list starting from the head and loop toward the middle
// return the node once it is found
// if index is greater than half the length of the list
// loop through the list starting from the tail and loop towards the middle
// return the node once it is found

// set
// create a variable which is the result of the get method at the index passed to the function
// if the get method return a valid node, set the values os that node to be value passed to the function
// return true
// otherwise, return false

// Insert
// if the index is less than zero or greater than or equal to the length return false
// if the index is 0, unshift
// if the index is the same as the length push
// use the get method to access the index -1
// set the next and prev property on the correct nodes to link everything together
// increment the length
// return true

// remove
// if the index is less than zero or greater than or equal to the length return undefined
// if the index is 0 shift
// if the index is the same as the length-1, pop
// use the get method to retrieve the item to be removed
// update the next and prev properties to remove the found node from the list
// set next and prev to null on the found node
// decrement the length
// return the removed node
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

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
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
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removeNode = this.get(index);
    removeNode.prev.next = removeNode.next;
    removeNode.next.prev = removeNode.prev;
    removeNode.next = null;
    removeNode.prev = null;
    this.length--;
    return removeNode;
  }
}

let doubleList = new DoublyLinkedList();

console.log(doubleList.push("clement"));
console.log(doubleList.push("Hello World"));
console.log(doubleList.push("hi"));
