/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {
    str = str.replace("\n", " ");
    str = str.replace("\t", " ");
    str = str.replace("  ", " ").trim();
    const arr = str.toLowerCase().split(" ");
    const count: { [index: string]: number } = {};
    for (const element of arr) {
      count[element] = (+count[element] || 0) + 1;
    }
    return count;
  }
}

export { Words };
