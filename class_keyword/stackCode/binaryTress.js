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

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    }
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
