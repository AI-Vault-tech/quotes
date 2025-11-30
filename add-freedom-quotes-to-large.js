// Script to add freedom quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the freedom quotes we formatted earlier
const freedomQuotesData = fs.readFileSync('./freedom-quotes.json', 'utf8');
const freedomQuotes = JSON.parse(freedomQuotesData);

// Add the freedom quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...freedomQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${freedomQuotes.length} freedom quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);