// Script to add hope quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the hope quotes we formatted earlier
const hopeQuotesData = fs.readFileSync('./hope-quotes.json', 'utf8');
const hopeQuotes = JSON.parse(hopeQuotesData);

// Add the hope quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...hopeQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${hopeQuotes.length} hope quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);