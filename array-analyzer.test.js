const analyseArray = require('./array-analyzer');

test('[1,8,3,4,2,6] to be { average: 4, min: 1, max: 8, length: 6', () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
