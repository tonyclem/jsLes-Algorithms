// Inserting
// Create a new node
// Starting at the root
// Check if there is a root, if not the root now become that new node
// if there is a root, check if the value of the new node is greater than or less than values of the root
// if it is greater: check to see if there is a node and repeat these steps : if there is not, add that node as the right property
// if it is less: check to see if there is a node to the left; if there is, move to that node and repeat these steps: if there is not, add that node as the left property

// find
// check if there is a root, if not, we're done searching!
// if there is a root, check if the value of the new node is the value we looking for
// if we found it, we're done!
// if not, check to see if the values is greater than the value of the root
// if it is greater: check to see if there is a node to the right
// if there is, move to that node and repeat these steps
// if there is not, we're done searching!
// if it is less: check to see if there is node to the left:
// if there is, move too that node and repeat these steps
// if there is not, we're done searching!

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
