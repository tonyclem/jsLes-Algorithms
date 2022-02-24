// write a function called linearSearch which accepts an array and a value, returns the, index at which the values exist if the values doest not exist in the array, return -1

function linearSearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 20));
