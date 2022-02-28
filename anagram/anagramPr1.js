const checkAnagram = (letterA, letterB) => {
  // first check if the letter is'nt the same, then end
  if (letterA.length !== letterB.length) {
    return false;
  }

  // create a lookup to look at the letter
  const lookup = {};

  //   create a loop statement to loop through the argument
  for (let i = 0; i < letterA.length; i++) {
    //   declared a new variable and pass in letterA
    let first = letterA[i];

    lookup[first] ? (lookup[first] += 1) : (lookup[first] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < letterB.length; i++) {
    let second = letterB[i];
    if (!lookup[second]) {
      return false;
    } else {
      lookup[second] -= 1;
    }
  }
  console.log(lookup);
  return true;
};

console.log(checkAnagram("abc", "cba"));
