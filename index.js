function isPalindrome(word) {
  // Write your algorithm here
  let wordArr = []
  for (let i = word.length-1; i > -1; i--) {
    wordArr.push(word[i])
  }
  const palindrome = wordArr.join("")
  return palindrome === word
}

/* 
  Add your pseudocode here
  initialize empty array
    loop through the parameter from the back to front
      push each letter into the empty array
    end loop
  join the letters to create the reverse word
  return boolean statement to determine if the parameter matches the joined array
*/

/*
  Add written explanation of your solution here
  The word entered as a parameter needs to be split up and reversed into an empty array
  then joined back together to form the reversed version of the parameter. 
  A boolean statement can return if the parameter is a palindrome.
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
