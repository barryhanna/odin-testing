const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const encrypt = (str) =>
  Array.from(str)
    .map((ch) => rot13(ch))
    .join('');

function rot13(char) {
  const index = alphabet.indexOf(char);
  const newIndex = (index + 13) % 26;
  return alphabet[newIndex];
}

module.exports = encrypt;
