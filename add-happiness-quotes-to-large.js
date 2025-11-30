// Script to add happiness quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the happiness quotes we formatted earlier
const happinessQuotesData = fs.readFileSync('./happiness-quotes.json', 'utf8');
const happinessQuotes = JSON.parse(happinessQuotesData);

// Add the happiness quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...happinessQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${happinessQuotes.length} happiness quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);