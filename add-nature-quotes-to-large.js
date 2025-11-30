// Script to add nature quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the nature quotes we formatted earlier
const natureQuotesData = fs.readFileSync('./nature-quotes.json', 'utf8');
const natureQuotes = JSON.parse(natureQuotesData);

// Add the nature quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...natureQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${natureQuotes.length} nature quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);