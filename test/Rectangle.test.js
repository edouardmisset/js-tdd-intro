// imports
const assert = require('assert');
const Rectangle = require('../Rectangle.js');

// Tests:
describe('Rectangle', () => {
  it('is a function accepting two arguments', () => {
    assert.strictEqual(typeof Rectangle, 'function');
    assert.strictEqual(Rectangle.length, 2);
  });

  it('checks if it is a square', () => {
    // Case where it is true
    assert.strictEqual(new Rectangle(5, 5).isSquare(), true);
    // Case where it is false
    assert.strictEqual(new Rectangle(5, 10).isSquare(), false);
  });

  it('returns its area', () => {
    assert.strictEqual(new Rectangle(7, 13).getArea(), 91);
  });

  it('returns its perimeter', () => {
    assert.strictEqual(new Rectangle(20, 35).getPerimeter(), 110);
  });
});
