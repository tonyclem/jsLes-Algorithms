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

console.log(areThereDuplicates(0, -1, -2, 3, 2, 1));
