function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  let reversed = [];
  for (let i = 0; i < str.length; i++) {
    reversed[i] = str[str.length - i - 1];
  }
  return reversed.join('');
}

module.exports = { capitalize, reverseString };
