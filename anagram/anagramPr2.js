function anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let firstLetter = first[i];

    lookup[firstLetter]
      ? (lookup[firstLetter] += 1)
      : (lookup[firstLetter] = 1);
    console.log(lookup);
  }

  for (let i = 0; i < second.length; i++) {
    let secondLetter = second[i];

    if (!lookup[secondLetter]) {
      return false;
    } else {
      lookup[secondLetter] -= 1;
    }

    console.log(lookup);
  }
  return true;
}
console.log(anagram("company", "panycom"));
