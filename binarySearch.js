// Write a function called binarySearch which accept a sorted array and a value and  return the index at which the value exists. otherwise, return -1

function binarySearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(
  binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 95, 98, 99],
    30
  )
);
console.log(
  binarySearch(
    [6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 95, 98, 99],
    95
  )
);

// Example 2

function binarySearch1(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
console.log(
  binarySearch1(
    [6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 95, 98, 99],
    95
  )
);

// Refactored Version
function binarySearch2(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(
  binarySearch2(
    [6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 95, 98, 99],
    95
  )
);
