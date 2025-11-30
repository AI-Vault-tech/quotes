// Script to add David Hume quotes to the largeQuotes.json file
const fs = require('fs');

// Read the existing largeQuotes.json file
let largeQuotes = [];
try {
  const data = fs.readFileSync('src/data/largeQuotes.json', 'utf8');
  largeQuotes = JSON.parse(data);
  console.log(`Loaded ${largeQuotes.length} existing quotes from largeQuotes.json`);
} catch (err) {
  console.log('largeQuotes.json not found or invalid, starting with empty array');
  largeQuotes = [];
}

// Read the Hume quotes
const humeQuotes = JSON.parse(fs.readFileSync('hume-quotes.json', 'utf8'));
console.log(`Loaded ${humeQuotes.length} Hume quotes to add`);

// Add Hume quotes to largeQuotes array
const updatedQuotes = [...largeQuotes, ...humeQuotes];

// Save updated quotes back to largeQuotes.json
fs.writeFileSync('src/data/largeQuotes.json', JSON.stringify(updatedQuotes, null, 2));

console.log(`Successfully added ${humeQuotes.length} Hume quotes to largeQuotes.json`);
console.log(`Total quotes in database: ${updatedQuotes.length}`);