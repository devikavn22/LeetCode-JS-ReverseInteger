/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit 
integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversed = 0;
  while (x !== 0) {
    const pop = x % 10;
    x = Math.trunc(x / 10);

    // Check for integer overflow
    if (
      reversed > Math.trunc(Math.pow(2, 31) / 10) ||
      (reversed === Math.trunc(Math.pow(2, 31) / 10) && pop > 7)
    ) {
      return 0;
    }
    if (
      reversed < Math.trunc(Math.pow(-2, 31) / 10) ||
      (reversed === Math.trunc(Math.pow(-2, 31) / 10) && pop < -8)
    ) {
      return 0;
    }

    reversed = reversed * 10 + pop;
  }
  return reversed;
};

// Sample inputs and outputs
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(1534236469)); // Output: 0 (overflow case)

// Additional test cases
console.log(reverse(0)); // Output: 0
console.log(reverse(7463847419)); // Output: 0 (overflow case)

// Explanation:
/*
use the modulo operator (%) to get the last digit of x, and then we remove 
that digit from x by using integer division (Math.trunc(x / 10)).

** For a 32-bit signed integer, the maximum value is 2,147,483,647, and the minimum value is -2,147,483,648.

When we reverse the digits of a positive number, it could potentially lead to an overflow 
if the reversed number is greater than 2,147,483,647. To check for this, we use pop > 7. 
This is because the maximum digit in the units place 
for a 32-bit signed integer is 7 (from 0 to 7), and if the current digit is greater than 7, it will result in an overflow.

Similarly, when reversing the digits of a negative number, it could potentially lead to an 
overflow if the reversed number is smaller than -2,147,483,648. To check for this, we use pop < -8. 
This is because the minimum digit in the units place for a 32-bit signed integer is -8 (from 0 to -8), 
and if the current digit is smaller than -8, it will result in an overflow.

**** Time Complexity:>> Logarithmic 
The time complexity of this solution is O(log(N)) because the number of iterations in the 
while loop is proportional to the number of digits in the input x.

**** Space Complexity: >> Constant
The space complexity is O(1) because we use a fixed amount of extra space to store variables, regardless of the input size

*/
