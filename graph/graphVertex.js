// Vertex
// Write a method called addVertex, which accepts a name of a vertex
// it should add key to the adjacency list with the name of the vertex and set its value ti be an empty array

// Edge Case
// This function should accept two vertices, we can them vertex1 and vertex2
// The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
// The function should find in the adjacency list the key of vertex2 and push vertex1 to the array

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}
