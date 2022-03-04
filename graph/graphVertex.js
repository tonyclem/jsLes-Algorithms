// Vertex
// Write a method called addVertex, which accepts a name of a vertex
// it should add key to the adjacency list with the name of the vertex and set its value ti be an empty array

// Edge Case
// This function should accept two vertices, we can them vertex1 and vertex2
// The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
// The function should find in the adjacency list the key of vertex2 and push vertex1 to the array

// Removing An Edge
// This function should accept two vertices, we'll call them vertex1 and vertex2
// The function should reassign the key of vertex1 to be an array that does not contain vertex2
// The function should reassign the key of vertex2 to be an array that does not contain vertex1

// Remove a Vertex
// The function should accept a vertex to remove
// The function should loop as long as there are any other vertices in the adjacency list for that vertex
// Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
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
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
