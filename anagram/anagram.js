//  ==================      Anagrams      ======================= //
// Given two strings, write a function to determine if the second string is an anagram of the first. an anagram is word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

function validAnagrams(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set it to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter2 = second[i];
    // can't find letter2 or letter2 is zero then it 's not an anagrams '
    if (!lookup[letter2]) {
      return false;
    } else {
      lookup[letter2] -= 1;
    }
    /* !lookup[letter2] ? lookup[letter2] : (lookup[letter2] -= 1); */ // do some thing like above code
  }
  console.log(lookup);
  return true;
}

validAnagrams("anagram", "nagaram");
