const encrypt = require('./caesar.js');

test('a should return n', () => {
  expect(encrypt('a')).toEqual('n');
});

test('n should return a', () => {
  expect(encrypt('n')).toEqual('a');
});

test('an should return na', () => {
  expect(encrypt('an')).toEqual('na');
});

test('hello should return uryyb', () => {
  expect(encrypt('hello')).toEqual('uryyb');
});
