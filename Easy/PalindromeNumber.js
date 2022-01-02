// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?


var isPalindrome = function(x) {
  let reversed = 0;
  let orignal = x;
  while(x > 0) {
    var lastDigit = x % 10;
    reversed = reversed * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
  return reversed === orignal;
};


// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(123321)); // Output: true
console.log(isPalindrome(123456789)); // Output: false
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(123456789)); // Output: false
console.log(isPalindrome(12345678987654321)); // Output: false
console.log(isPalindrome(123456789876543210)); // Output: false
console.log(isPalindrome(1234567898765432109)); // Output: false