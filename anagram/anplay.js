const anagram = (letter1, letter2) => {
  if (letter1.length !== letter2.length) {
    return false;
  }

  // compare the value together
  const lookup = {};

  for (let i = 0; i < letter1.length; i++) {
    // let first = letter1[i];
    lookup[letter1[i]] ? (lookup[letter1[i]] += 1) : (lookup[letter1[i]] = 1);
  }

  for (let i = 0; i < letter2.length; i++) {
    // let second = letter2[i];
    !lookup[letter2[i]] ? lookup[letter2[i]] : (lookup[letter2[i]] -= 1);
  }
  return true;
};

console.log(anagram("program", "grampro"));
