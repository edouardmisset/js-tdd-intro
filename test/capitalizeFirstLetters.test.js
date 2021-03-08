// Imports
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters.js');

// Tests:

// Gives the test suite a label using describe
describe('capitalizeFirstLetters', () => {
  // Gives the test a label using it
  it('is a function accepting one argument', () => {
    // Checks that capitalizeFirstLetters is a function
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    // Checks that capitalizeFirstLetters accepts one argument
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it('transforms a string correctly', () => {
    // Checks that capitalizeFirstLetters transforms javaScript correctly
    assert.strictEqual(
      capitalizeFirstLetters('i am learning TDD'),
      'I Am Learning TDD'
    );
  });

  it('works with a 1-char string', () => {
    // Checks that it works for a 1-character string
    assert.strictEqual(capitalizeFirstLetters('x'), 'X');
  });

  it('works with an empty string', () => {
    // Checks that it works for an empty string
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});
