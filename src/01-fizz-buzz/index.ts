/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

function fizzBuzz(n: number) {
  let s = "";
  let c3 = 0,
    c5 = 0;
  for (var i = 1; i <= n; i++) {
    c3++;
    c5++;
    if (c3 == 3) {
      s += "fizz";
      c3 = 0;
    }
    if (c5 == 5) {
      s += "buzz";
      c5 = 0;
    }
    if (s.length == 0) console.log(i);
    else console.log(s);
    s = "";
  }
}

export { fizzBuzz };
