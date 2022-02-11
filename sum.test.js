const sum = require('./sum');


beforeAll(() => {
  a=5;
  b=5;
})
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, null)).toBe(4);
});