function isPalindrome(word) {
  // Write your algorithm here

  for(let startIndex = 0; startIndex < word.length/2; startIndex++) {
  //length of the word minus one to get the last letter of the word, then subtract i, so as i increases, j will decrease  
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  console.log('Expecting: true');
  console.log("word", isPalindrome('racecar'));

  console.log('Expecting: false');
  console.log("word", isPalindrome('robot'));

  iterate from the beginning of the string to the middle of the string
    compare the letter we're iterating over to the corresponding letter at the end of the string
      if the letters don't match, return false
  
  if we reach the middle, and all the letters match, return true
*/

/*
  Add written explanation of your solution here

I need to make a function that returns either true or false. When the input string reads the same forwards and backwards, the function should return true. A Palindrome means the first letter and last letter are the same, the second letter and second to last letter are the same, and continues until it reaches the middle. It should return false if it does not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
