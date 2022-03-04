// Breadth First
// This function should accept a starting vertex
// create a queue (you can use an array) and place the starting vertex in it
// Create an array to store the node visited
// Create an object to store nodes visited
// Mark the starting vertex as visited
// Loop as long as there is anything in the queue
// Remove the first vertex from the queue and push it into the array that stores node visited
// loop over each vertex in the adjacency list for the vertex you are visiting.
// If it not inside the object that stores node visited, mark it as visited and enqueue that vertex
// Once you have finished looping, return the array of visited nodes.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    // function should find in the adjacency list the key of vertex1 and push vertex2 to the array
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    // remove everything that is'nt equal to vertex1 or vertex2 form the array
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // should accept a vertex to remove
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    // we are removing and any values in the adjacency list for that vertex
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    let result = [];
    let visited = {};
    (function dfs(vertex) {
      // return early if the vertex is empty
      if (!vertex) return null;
      // should place the vertex it accepts into the visited object
      visited[vertex] = true;
      // and push that vertex into the result array
      result.push(vertex);
      // Loop over all of the values in the adjacencyList for that vertex
      adjacencyList[vertex].forEach((neighbor) => {
        // If any of those values have not been visited, recursively invoke the helper function with the vertex
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  // The function should accept a starting node
  depthFirstIterative(start) {
    // Add the starting vertex to the stack
    const stack = [start];
    const result = [];
    const visited = {};
    // and mark it visited
    visited[start] = true;
    let currentVertex;
    while (stack.length) {
      // Pop the next vertex from the stack
      currentVertex = stack.pop();

      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        // If that vertex hasn't been visited yet:
        if (!visited[neighbor]) {
          // Mark it as visited,
          visited[neighbor] = true;
          // Push all of its neighbors into the stack
          stack.push(neighbor);
        }
      });
    }
    // Return the result array
    return result;
  }
  BreadthFirst(start) {
    // create a queue (you can use an array) and place the starting vertex
    const queue = [start];
    // Create an array to store the node visited
    const result = [];
    // Create an object to store nodes visited
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (queue.length) {
      // Remove the first vertex from the queue
      currentVertex = queue.shift();
      // and push it into the array that stores node visited
      result.push(currentVertex);
      // loop over each vertex in the adjacency list for the vertex you are visiting.
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        // If it not inside the object that stores node visited
        if (!visited[neighbor]) {
          // mark it as visited and enqueue that vertex
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

// If it not inside the object that stores node visited, mark it as visited and enqueue that vertex
// Once you have finished looping, return the array of visited nodes.

let g = new Graph();
