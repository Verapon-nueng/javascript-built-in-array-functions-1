let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  const wordLengths = words.filter((word => word.length >= 5));
  console.log(wordLengths);
  return wordLengths;
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
