// capitalizeFirstLetters.js
function capitalizeFirstLetters(string) {
  let convertedArray = [];

  string.split(' ').forEach((word) => {
    convertedArray.push(word.charAt(0).toUpperCase() + word.slice(1));
  });

  return convertedArray.join(' ');
}

module.exports = capitalizeFirstLetters;
