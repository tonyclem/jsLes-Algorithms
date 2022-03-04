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

  depthFirstREcursive(start) {
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
}
// The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
// Loop over all of the values in the adjacencyList for that vertex
// If any of those values have not been visited, recursively invoke the helper function with the vertex
// invoke the helper function with the starting vertex
// Return the array
