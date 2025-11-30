// Script to add courage quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the courage quotes we formatted earlier
const courageQuotesData = fs.readFileSync('./courage-quotes.json', 'utf8');
const courageQuotes = JSON.parse(courageQuotesData);

// Add the courage quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...courageQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${courageQuotes.length} courage quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);