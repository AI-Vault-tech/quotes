// Script to add unique philosophical quotes to the database
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

// Read the unique quotes
const uniqueQuotes = JSON.parse(fs.readFileSync('unique-philosophical-quotes.json', 'utf8'));
console.log(`Loaded ${uniqueQuotes.length} unique quotes to add`);

// Add unique quotes to largeQuotes array
const updatedQuotes = [...largeQuotes, ...uniqueQuotes];

// Save updated quotes back to largeQuotes.json
fs.writeFileSync('src/data/largeQuotes.json', JSON.stringify(updatedQuotes, null, 2));

console.log(`Successfully added ${uniqueQuotes.length} unique quotes to largeQuotes.json`);
console.log(`Total quotes in database: ${updatedQuotes.length}`);