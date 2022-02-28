//      ========== Frequency Counter ==========             //

// Implement a function called, areThereDuplicates which accepts a variable number of argument, and checks whether there are any duplicates among the argument passed in. you can solve this using the frequency counter pattern Or the multiple pointers pattern.

//areThereDuplicates(1,2,3) false
//areThereDuplicates(1,2,2) true
//areThereDuplicates('a', "b", "c", "a") true

function areThereDuplicates() {
  let collection = {};

  for (let val in collection) {
    collection[arguments[val]] = collection[arguments[val]] || 0 + 1;
  }

  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 2));

// Example 2
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
areThereDuplicates("a", "b", "c", "a");

// Exercise 3
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
areThereDuplicates(1, 2, 2);

// exercise 4
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
// areThereDuplicates(2, 3, 2, 3, 4);
