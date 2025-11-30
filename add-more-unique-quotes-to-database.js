// add-more-unique-quotes-to-database.js
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

// Read the additional unique quotes
const moreUniqueQuotes = JSON.parse(fs.readFileSync('more-unique-philosophical-quotes.json', 'utf8'));
console.log(`Loaded ${moreUniqueQuotes.length} additional unique quotes to add`);

// Add unique quotes to largeQuotes array
const updatedQuotes = [...largeQuotes, ...moreUniqueQuotes];

// Save updated quotes back to largeQuotes.json
fs.writeFileSync('src/data/largeQuotes.json', JSON.stringify(updatedQuotes, null, 2));

console.log(`Successfully added ${moreUniqueQuotes.length} additional unique quotes to largeQuotes.json`);
console.log(`Total quotes now: ${updatedQuotes.length}`);