//  ==================      Anagrams      ======================= //
// Given two strings, write a function to determine if the second string is an anagram of the first. an anagram is word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

const anagram = (firstL, secondL) => {
  // If condition to compared to letter if it true of false
  if (firstL.length !== secondL.length) {
    return false;
  }
  // a object the will compared the value together
  let lookup = {};
  // create a loop to loop through the first giving values
  for (let i = 0; i < firstL.length; i++) {
    let letterA = firstL[i];
    lookup[letterA] ? (lookup[letterA] += 1) : (lookup[letterA] = 1);
  }
  // create loop to loop through the second giving values
  for (let i = 0; i < secondL.length; i++) {
    let letterB = secondL[i];
    if (!lookup[letterB]) {
      return false;
    } else {
      lookup[letterB] -= 1;
    }
  }
  return true;
};

console.log(anagram("program", "grampro"));
