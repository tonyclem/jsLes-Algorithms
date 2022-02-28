function sortSelectionPlayG(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      //   if (i !== lowest) {
      //       //SWAP!
      console.log("**************");
      console.log(arr);
      console.log("SWaping to:");
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
      console.log(arr);
      console.log("**************");
      //   }
    }
  }
  return arr;
}

console.log(sortSelectionPlayG([2, 5, 6, 3, 10, 1, 4]));
