// Import the countries data from countries_data.js
const countries = require('./data/countries_data');

// Function to sort countries by name
function sortCountriesByName(countries) {
    return countries.sort((a, b) => a.name.localeCompare(b.name));
}

// Function to sort countries by capital
function sortCountriesByCapital(countries) {
    return countries.sort((a, b) => a.capital.localeCompare(b.capital));
}

// Function to sort countries by population
function sortCountriesByPopulation(countries) {
    return countries.sort((a, b) => b.population - a.population);
}

// Function to find the most spoken languages
function mostSpokenLanguages(countries, n) {
    const languageCount = {};
    countries.forEach(country => {
        country.languages.forEach(language => {
            if (languageCount[language]) {
                languageCount[language]++;
            } else {
                languageCount[language] = 1;
            }
        });
    });

    const sortedLanguages = Object.entries(languageCount)
        .sort((a, b) => b[1] - a[1])
        .map(([language, count]) => ({ language, count }));

    return sortedLanguages.slice(0, n);
}

// Function to find the most populated countries
function mostPopulatedCountries(countries, n) {
    return countries
        .sort((a, b) => b.population - a.population)
        .slice(0, n)
        .map(country => ({ country: country.name, population: country.population }));
}

// Example outputs
console.log(sortCountriesByName(countries));
console.log(sortCountriesByCapital(countries));
console.log(sortCountriesByPopulation(countries));

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));

console.log(mostPopulatedCountries(countries, 10));
console.log(mostPopulatedCountries(countries, 3));
