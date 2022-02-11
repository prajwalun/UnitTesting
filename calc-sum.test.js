const calc_sum = require('./calc');

describe("Addition test", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(calc_sum.sum(1, 5)).toBe(3);
    });
   })