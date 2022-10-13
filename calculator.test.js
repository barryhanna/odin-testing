import Calculator from './calculator';

test('add 1 plus 2 to be 3', () => {
  expect(new Calculator().add(1, 2)).toEqual(3);
});
test('add 2 subtract 1 to be 1', () => {
  expect(new Calculator().subtract(2, 1)).toEqual(1);
});
test('add 3 divide 3 to be 1', () => {
  expect(new Calculator().divide(3, 3)).toEqual(1);
});

test('add 2 multiply 3 to be 6', () => {
  expect(new Calculator().multiply(2, 3)).toEqual(6);
});
