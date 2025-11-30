// Script to add knowledge quotes to largeQuotes.json

const fs = require('fs');

// Read the existing largeQuotes.json file
const largeQuotesData = fs.readFileSync('./src/data/largeQuotes.json', 'utf8');
const largeQuotes = JSON.parse(largeQuotesData);

// Read the knowledge quotes we formatted earlier
const knowledgeQuotesData = fs.readFileSync('./knowledge-quotes.json', 'utf8');
const knowledgeQuotes = JSON.parse(knowledgeQuotesData);

// Add the knowledge quotes to the large quotes array
const combinedQuotes = [...largeQuotes, ...knowledgeQuotes];

// Write the combined array back to largeQuotes.json
fs.writeFileSync('./src/data/largeQuotes.json', JSON.stringify(combinedQuotes, null, 2));

console.log(`Added ${knowledgeQuotes.length} knowledge quotes to largeQuotes.json`);
console.log(`Total quotes now: ${combinedQuotes.length}`);