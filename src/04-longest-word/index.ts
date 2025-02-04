/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string): string {
  if (!sen) {
    throw new Error("No input");
  }

  let longestWord: string = sen
    .replace(/[^0-9a-z]/gi, " ")
    .split(" ")
    .reduce(function (longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
  return longestWord;
}

export { longestWord };
