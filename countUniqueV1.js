function countUniqueValues(arr) {
  let unique = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[unique]) {
      unique++;
      arr[unique] = arr[i];
    }
    console.log(unique);
  }
  return unique + 1;
}

countUniqueValues([2, 4, 2, 5, 6, 7, 8, 9, 3, 10]);
