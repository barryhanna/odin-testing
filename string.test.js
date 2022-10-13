const { capitalize, reverseString } = require('./string');

test('should return Capital', () => {
  expect(capitalize('capital')).toEqual('Capital');
});

test('should return tset', () => {
  expect(reverseString('test')).toEqual('tset');
});
