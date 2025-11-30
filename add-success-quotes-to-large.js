// Script to add success quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the success quotes we formatted earlier
const successQuotesData = fs.readFileSync('./success-quotes.json', 'utf8');
const successQuotes = JSON.parse(successQuotesData);

// Add the success quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...successQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${successQuotes.length} success quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);