// Script to add Urdu quotes to the largeQuotes.json file
const fs = require('fs');

// Read the existing largeQuotes.json file
let largeQuotes = [];
try {
  const data = fs.readFileSync('largeQuotes.json', 'utf8');
  largeQuotes = JSON.parse(data);
  console.log(`Loaded ${largeQuotes.length} existing quotes from largeQuotes.json`);
} catch (err) {
  console.log('largeQuotes.json not found or invalid, starting with empty array');
  largeQuotes = [];
}

// Read the formatted Urdu quotes
const urduQuotes = JSON.parse(fs.readFileSync('urdu-quotes-formatted.json', 'utf8'));
console.log(`Loaded ${urduQuotes.length} Urdu quotes to add`);

// Add Urdu quotes to largeQuotes array
const updatedQuotes = [...largeQuotes, ...urduQuotes];

// Save updated quotes back to largeQuotes.json
fs.writeFileSync('largeQuotes.json', JSON.stringify(updatedQuotes, null, 2));

console.log(`Successfully added ${urduQuotes.length} Urdu quotes to largeQuotes.json`);
console.log(`Total quotes in database: ${updatedQuotes.length}`);