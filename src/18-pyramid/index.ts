/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
  if (n > 0) {
    for (let i: number = 1; i <= n; i++) {
      // Levels
      const arr = [];
      for (let l: number = 0; l < n - i; l++) {
        arr.push(" ");
      }
      for (let l: number = 0; l < 2 * i - 1; l++) {
        arr.push("#");
      }
      for (let l: number = 0; l < n - i; l++) {
        arr.push(" ");
      }
      console.log(arr.join(""));
    }
  } else {
    console.log("Give a positive integer");
  }
}

export { pyramid };
