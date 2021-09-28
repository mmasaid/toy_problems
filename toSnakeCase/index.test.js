/**
 * Complete the method/function so that it converts dash/underscore delimited words or any type from camel casing to snake case
 * The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/

/**
 * Examples
  "theStealthWarrior"  gets converted to "the-stealth-warrior"
  "TheStealthWarrior"  gets converted to "The_Stealth_Warrior"
  [{ abcD: 1, user: { userId: 2 } }]  gets converted to [{ abc_d: 1, user: { user_id: 2 } }]
 */

function toSnakeCase(str) {
  // return to do ...
}

describe('Tests', () => {
  it('test toSnakeCase', () => {
    expect(toSnakeCase('')).toStrictEqual('');
    expect(toSnakeCase('theStealthWarrior')).toStrictEqual('the_stealth_warrior');
    expect(toSnakeCase('TheStealthWarrior')).toStrictEqual('the_stealth_warrior');
    expect(toSnakeCase('ABC')).toStrictEqual('A_B_C');
    expect(toSnakeCase({abcD: 1})).toStrictEqual({abc_d: 1});
    expect(toSnakeCase([{abcD: 1, user: {userId: 2}}])).toStrictEqual([{abc_d: 1, user: {user_id: 2}}]);
  });
});
