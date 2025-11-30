// Script to add justice quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the justice quotes we formatted earlier
const justiceQuotesData = fs.readFileSync('./justice-quotes.json', 'utf8');
const justiceQuotes = JSON.parse(justiceQuotesData);

// Add the justice quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...justiceQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${justiceQuotes.length} justice quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);