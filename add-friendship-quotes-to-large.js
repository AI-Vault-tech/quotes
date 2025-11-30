// Script to add friendship quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the friendship quotes we formatted earlier
const friendshipQuotesData = fs.readFileSync('./friendship-quotes.json', 'utf8');
const friendshipQuotes = JSON.parse(friendshipQuotesData);

// Add the friendship quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...friendshipQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${friendshipQuotes.length} friendship quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);