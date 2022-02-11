const calc_diff = require('./calc');

describe("Diff test", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(calc_diff.diff(1, 2)).toBe(-1);
    });
   })