// Depth first Traversal
// The function should accept a starting node
// Create a list to store the end result, to be returned at the very end
// create an object to store visited vertices
// create a helper function which accepts a vertex
// The helper function should return early if the vertex is empty
// The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
// Loop over all of the values in the adjacencyList for that vertex
// If any of those values have not been visited, recursively invoke the helper function with the vertex
// invoke the helper function with the starting vertex
// Return the array

// Iterative
// The function should accept a starting node
// Create stack to help use keep track of vertices (use a list/array)
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Add the starting vertex to the stack, and mark it visited
// While the stack has something in it;
// Pop the next vertex from the stack
// If that vertex hasn't been visited yet:: Mark it as visited, :: Add it as result list :: Push all of its neighbors into the stack
// Return the result array

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
    //go through While the stack has something in it;
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
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
