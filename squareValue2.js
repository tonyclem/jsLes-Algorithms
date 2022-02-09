function same(arr1, arr2) {
  // if arr1 and arr2 is not true, return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // by default is set to an empty object
  let frequencyCount1 = {};
  let frequencyCount2 = {};

  // for of loop iterate over the properties, now arr1 is called val
  for (let val of arr1) {
    // passing val inside frequencyCount1 and checking if frequencyCount1 || or and increment it with one
    frequencyCount1[val] = (frequencyCount1[val] || 0) + 1;
  }

  for (let val of arr2) {
    // passing val inside frequencyCount2 and checking if frequencyCount2 || or and increment it with one
    frequencyCount2[val] = (frequencyCount2[val] || 0) + 1;
  }

  // frequencyCount1 is change to key, for...in loop below iterates over all of the object's enumerable, non-Symbol properties and logs a string of the property names and their values.
  for (let key in frequencyCount1) {
    // ! not true, key squared property or values are'nt in frequencyCount2 return false
    if (!(key ** 2 in frequencyCount2)) {
      return false;
    }
    // frequencyCount2[frequencyCount1 porperty square] ! not equal true, to the property or values  in frequencyCount return false
    if (frequencyCount2[key ** 2] !== frequencyCount1[key]) {
      return false;
    }
  }

  console.log(frequencyCount1);
  console.log(frequencyCount2);
  return true;
}

same([1, 2, 3, 2, 1], [9, 1, 4, 4, 1]);
// { '1': 2, '2': 2, '3': 1 }
// { '1': 2, '4': 2, '9': 1 }
