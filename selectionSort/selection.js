// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number
// If a smaller number is found, designate the smaller number to be new 'minimum' and continue until the end of the array
// if the 'minimum' is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted

// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      console.log(j);
      if (arr[j] < arr[lowest]) {
        lowest = j;
        console.log("okay break na my guy: ", j);
      }
    }
    if (i !== lowest) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// ES2015 VERSION
// function selectionSort(arr) {
//   const swap = (arr, idx1, idx2) =>
//     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[lowest] > arr[j]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) swap(arr, i, lowest);
//   }

//   return arr;
// }

sselectionSort([0, 2, 34, 22, 10, 19, 17]);
