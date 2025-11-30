// Script to add love quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the love quotes we formatted earlier
const loveQuotesData = fs.readFileSync('./love-quotes.json', 'utf8');
const loveQuotes = JSON.parse(loveQuotesData);

// Add the love quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...loveQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${loveQuotes.length} love quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);