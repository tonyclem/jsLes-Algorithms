// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has
// it's corresponding value squared in the seconde array. the frequency of values must be the same.

// Naive Solution

function same(arr1, arr2) {
  // if arr1 and arr2 is not true, return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // loop through the, arr1 length
  for (let i = 0; i < arr1.length; i++) {
    // passing arr1 and then square it with two, to arr2
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // if correctIndex is equal to the array length -1 is returned, which means the array will not be searched
    if (correctIndex === -1) {
      // return false
      return false;
    }
    console.log(arr2);
    // arr2 we using splice to removing or replacing existing elements, but here we keep on removing the any element that matched in squares
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [4, 1, 9, 4]);

// [ 4, 1, 9, 4 ]
// [ 4, 9, 4 ]
// [ 9, 4 ]
// [ 4 ]
