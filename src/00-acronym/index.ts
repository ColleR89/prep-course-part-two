/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
  return input
    .split(/(?=[A-Z][*a-z]|[ ]|[-])/)
    .map((word) =>
      word
        .replace(/[^0-9a-z]/gi, "")
        .slice(0, 1)
        .toUpperCase()
    )
    .join("");
}

export { parse };
