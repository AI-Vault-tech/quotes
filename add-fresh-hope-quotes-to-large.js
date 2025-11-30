// Script to add fresh hope quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the fresh hope quotes we formatted earlier
const freshHopeQuotesData = fs.readFileSync('./fresh-hope-quotes.json', 'utf8');
const freshHopeQuotes = JSON.parse(freshHopeQuotesData);

// Add the fresh hope quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...freshHopeQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${freshHopeQuotes.length} fresh hope quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);