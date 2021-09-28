/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 * The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/

/**
 * Examples
  "the-stealth-warrior" gets converted to "theStealthWarrior"
  "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */

function toCamelCase(str) {
  return str.replace(/[_-]\w/gi, (ch) => ch[1].toUpperCase());
}

describe('Tests', () => {
  it('test toSnakeCase', () => {
    expect(toCamelCase('')).toStrictEqual('');
    expect(toCamelCase('the_stealth_warrior')).toStrictEqual('theStealthWarrior');
    expect(toCamelCase('The-Stealth-Warrior')).toStrictEqual('TheStealthWarrior');
    expect(toCamelCase('A-B-C')).toStrictEqual('ABC');
  });
});
