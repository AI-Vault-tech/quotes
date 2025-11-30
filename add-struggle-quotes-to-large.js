// Script to add struggle quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the struggle quotes we formatted earlier
const struggleQuotesData = fs.readFileSync('./struggle-quotes.json', 'utf8');
const struggleQuotes = JSON.parse(struggleQuotesData);

// Add the struggle quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...struggleQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${struggleQuotes.length} struggle quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);