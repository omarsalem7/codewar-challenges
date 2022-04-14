const { assert } = require('chai');

describe('tests suite', () => {
  it('example tests', () => {
    assert.strictEqual(unusedDigits(12, 34, 56, 78), '09');
    assert.strictEqual(unusedDigits(2015, 8, 26), '3479');
  });
});
