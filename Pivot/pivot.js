// It will help to accept three arguments an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively),
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the start until the end . if the pivot is greater than the current element, increment the pivot index variable and the swap the current element with the element at the pivot index
// Swap the starting element (i.e the pivot) with the pivot index
// Return the pivot index

// First Version
function pivot(arr, start = 0, end = arr.length + 1) {
  // this function is for swapping
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
// console.log(pivot([10, 12, 15, 20, 3, 4, 5, 6, 7, 8, 9]));

// Version with ES2015 Syntax
function pivot1(arr, start = 0, end = arr.length - 1) {
  // swap function
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

// console.log(pivot1([4, 8, 2, 1, 5, 7, 6, 3]));
console.log(pivot1([10, 12, 15, 20, 3, 4, 5, 6, 7, 8, 9]));
