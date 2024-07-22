function countStartingLetters(countries) {
  const letterCount = {};
  
  countries.forEach(country => {
    const firstLetter = country[0].toUpperCase();
    if (letterCount[firstLetter]) {
      letterCount[firstLetter]++;
    } else {
      letterCount[firstLetter] = 1;
    }
  });
  
  return Object.entries(letterCount).map(([letter, count]) => ({ letter, count }));
}

console.log(countStartingLetters(countries)); // Example output
