// Script to add time quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the time quotes we formatted earlier
const timeQuotesData = fs.readFileSync('./time-quotes.json', 'utf8');
const timeQuotes = JSON.parse(timeQuotesData);

// Add the time quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...timeQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${timeQuotes.length} time quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);