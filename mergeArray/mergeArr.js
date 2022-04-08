// a sorted array, and count the unique values in the array. there can be negative numbers in the array, but it will always be sorted

const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};
console.log(merge([100, 200], [1, 2, 3, 5, 6]));

// Example II
const merge1 = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};
console.log(merge1([100, 200], [1, 2, 3, 5, 6]));
