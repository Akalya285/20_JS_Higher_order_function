const sentence = countries.reduce((acc, country, index) => {
  if (index === countries.length - 1) {
    return `${acc} and ${country} are north European countries`;
  } else {
    return `${acc}, ${country}`;
  }
}, 'Estonia');
console.log(sentence);
