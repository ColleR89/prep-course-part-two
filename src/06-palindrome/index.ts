/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str: string): boolean {
  let reversed: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str == reversed ? true : false;
}

export { palindrome };
