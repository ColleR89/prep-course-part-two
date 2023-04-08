/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number): boolean {
  let isEven = true;

  for (let i = 1; i <= n; i++) isEven = !isEven;

  return isEven;
}

export { isEven };
