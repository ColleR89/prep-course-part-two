/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str: string): string {
  const words: string[] = str.split(" ");
  let capitalised: string = "";

  for (let i: number = 0; i < words.length; i++) {
    capitalised += words[i][0].toUpperCase() + words[i].substring(1) + " ";
  }
  return capitalised.substring(0, capitalised.length - 1);
}

export { capitalize };
